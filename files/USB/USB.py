import struct
import time
from typing import Optional

import hid
import logging

# ------------------------------------------------------------
RODOS5_6_MAXIM_CRC8_TABLE = [
    0, 94, 188, 226, 97, 63, 221, 131, 194, 156, 126, 32, 163, 253, 31, 65,
    157, 195, 33, 127, 252, 162, 64, 30, 95, 1, 227, 189, 62, 96, 130, 220,
    35, 125, 159, 193, 66, 28, 254, 160, 225, 191, 93, 3, 128, 222, 60, 98,
    190, 224, 2, 92, 223, 129, 99, 61, 124, 34, 192, 158, 29, 67, 161, 255,
    70, 24, 250, 164, 39, 121, 155, 197, 132, 218, 56, 102, 229, 187, 89, 7,
    219, 133, 103, 57, 186, 228, 6, 88, 25, 71, 165, 251, 120, 38, 196, 154,
    101, 59, 217, 135, 4, 90, 184, 230, 167, 249, 27, 69, 198, 152, 122, 36,
    248, 166, 68, 26, 153, 199, 37, 123, 58, 100, 134, 216, 91, 5, 231, 185,
    140, 210, 48, 110, 237, 179, 81, 15, 78, 16, 242, 172, 47, 113, 147, 205,
    17, 79, 173, 243, 112, 46, 204, 146, 211, 141, 111, 49, 178, 236, 14, 80,
    175, 241, 19, 77, 206, 144, 114, 44, 109, 51, 209, 143, 12, 82, 176, 238,
    50, 108, 142, 208, 83, 13, 239, 177, 240, 174, 76, 18, 145, 207, 45, 115,
    202, 148, 118, 40, 171, 245, 23, 73, 8, 86, 180, 234, 105, 55, 213, 139,
    87, 9, 235, 181, 54, 104, 138, 212, 149, 203, 41, 119, 244, 170, 72, 22,
    233, 183, 85, 11, 136, 214, 52, 106, 43, 117, 151, 201, 74, 20, 246, 168,
    116, 42, 200, 150, 21, 75, 169, 247, 182, 232, 10, 84, 215, 137, 107, 53]
# ------------------------------------------------------------

class USBT:
    USB_T_RX_TX_BUF_SIZE = 9

    def __init__(self, hid: hid.Device):
        self.hid = hid

    def set_feature(self, data):
        try:
            self.hid.send_feature_report(bytes(data))
        except Exception:
            return False
        return True

    def get_feature(self, report_id=0):
        return self.hid.get_feature_report(report_id, USBT.USB_T_RX_TX_BUF_SIZE)


    def get_id(self)-> Optional[int]:
        # TODO()
        ...

class OneWire(USBT):

    def reset(self) -> bool:
        # TODO(RESET Command)
        ...

    def write_bit(self, bit) -> bool:
        # TODO(Write one bit)
        ...

    def write_byte(self, byte) -> bool:
        # TODO(Write one byte)
        ...

    def write_4_byte(self, data) -> bool:
        # TODO(Write four bytes)
        ...

    def read_2_bit(self) -> Optional[int]:
        # TODO(Read two bits, return integer value for which first and second bits equals reading bits)
        ...

    def read_byte(self)-> Optional[int]:
        # TODO(Read one byte)
        ...

    def read_4_byte(self)-> Optional[bytes]:
        # TODO(Read fours bytes)
        ...






class RODOS56(OneWire):
    RODOS5_6_MAX_SENS_COUNT = 128
    DS18B20_SKRATCHPAD_CONF_RES_12BIT = 0x7F
    DS18B20_SKRATCHPAD_12BIT_MULT_E4 = 625

    def __init__(self, hid: hid.Device):
        super(RODOS56, self).__init__(hid)
        self.onewire_count = 0
        self.onewire_rom = [0] * RODOS56.RODOS5_6_MAX_SENS_COUNT

    def CRC8_rom_check(self, rom):
        crc = 0
        for i in range(8):
            pass
        return True

    def search_rom(self):
        self.onewire_count = 0
        self.onewire_rom = [0] * RODOS56.RODOS5_6_MAX_SENS_COUNT
        last_discrepancy = 0
        sn_rom = 0
        while self.onewire_count < RODOS56.RODOS5_6_MAX_SENS_COUNT:
            if self.reset() and self.write_byte(0xF0):
                discrepancy_marker = 0
                for bit_indx in range(1, 65):
                    two_bits = self.read_2_bit()
                    if two_bits == 0x00:
                        if bit_indx == last_discrepancy:
                            rom_bit = 1
                        elif bit_indx > last_discrepancy:
                            rom_bit = 0
                            discrepancy_marker = bit_indx
                        else:
                            rom_bit = (sn_rom >> (bit_indx - 1)) & 0x01
                            if rom_bit == 0:
                                discrepancy_marker = bit_indx
                        print("Bit indx = {}, Discrenpancy marker = {}".format(bit_indx, discrepancy_marker))
                    elif two_bits == 0x01:
                        rom_bit = 1
                    elif two_bits == 0x02:
                        rom_bit = 0
                    else:
                        print("Bit indx:", bit_indx, "Two bits:", two_bits)
                        return False

                    if rom_bit != 0:
                        sn_rom |= (1 << (bit_indx - 1))
                    else:
                        sn_rom &= ~(1 << (bit_indx - 1))

                    if not self.write_bit(rom_bit):
                        print("False write bit, bit_indx = {}, rom bit = {}, ".format(bit_indx, rom_bit))
                        return False
                last_discrepancy = discrepancy_marker
                if self.CRC8_rom_check(sn_rom):
                    logging.info(hex(sn_rom))
                    self.onewire_rom[self.onewire_count] = sn_rom
                    self.onewire_count += 1
                if last_discrepancy == 0:
                    break
            else:
                print("False reset or write byte")
                return False
        return True

    def skip_rom_convert(self):
        for i in range(3):
            if self.reset() and self.write_byte(0xCC) and self.write_byte(0x44):
                return True
        return False

    def read_temp(self) -> Optional[int]:
        if self.onewire_count == 0:
            if not self.search_rom():
                return None
            if self.onewire_count == 0:
                return None
        if self.skip_rom_convert():
            time.sleep(1.0)
            temperature = []
            for i in range(self.onewire_count):
                rom = self.onewire_rom[i]
                print("ROM = ", rom)
                T = self.get_temperature(rom)
                print("T = ", )
                temperature.append(T)
            return temperature

    def match_rom(self, rom):
        temp = struct.pack("<Q", rom)
        t1 = temp[:4]
        t2 = temp[4:]
        for i in range(3):
            if self.reset() and self.write_byte(0x55):
                if self.write_4_byte(t1) and self.write_4_byte(t2):
                    return True
        return False

    def CRC8(self, crc, data):
        return RODOS5_6_MAXIM_CRC8_TABLE[crc ^ data]

    def check_temp(self, l1, l2, l3) -> bool:
        crc = 0
        for i in range(4):
            crc = self.CRC8(crc, l1[i])
        for i in range(4):
            crc = self.CRC8(crc, l2[i])
        print(crc, l3)
        return crc == l3

    def get_temperature(self, rom):
        # TODO(Get temperature)
        # Before self.match_rom write byte 0xBE to device
        # Nextly read 4 byte in variable l1
        # Nextly read 4 byte in variable l2
        # Nextly read one byte in variable l1
        #
        for i in range(3):
            if self.match_rom(rom) and ...:
                family_code = rom & 0xFF
                print("Family code:", hex(family_code))
                l1 = ...
                l2 = ...
                l3 = ...
                if self.check_temp(l1, l2, l3):
                    if family_code == 0x28:
                        print("DS18B20")
                        print("Config code: ", hex(l2[0]))
                        return self.DS18S20_cacl_temp(l1[1], l1[0], l2[0])
                    elif family_code == 0x10:
                        print("DS18S20")

                    return None
        return None

    def DS18S20_cacl_temp(self, temp_MSB, temp_LSB, config):
        temp_code = (temp_MSB << 8) | temp_LSB
        sign = temp_MSB & 0x80 == 0
        if config == RODOS56.DS18B20_SKRATCHPAD_CONF_RES_12BIT:
            if sign:
                temp_em_4 = temp_code * RODOS56.DS18B20_SKRATCHPAD_12BIT_MULT_E4
            else:
                temp_em_4 = -( ((~temp_code) + 1) * RODOS56.DS18B20_SKRATCHPAD_12BIT_MULT_E4)
        return temp_em_4 / 10000


if __name__ == '__main__':
    vid = 0x20A0
    pid = 0x4173
    logging.root.setLevel(logging.DEBUG)
    with hid.Device(vid, pid) as h:
        print(f'Device manufacturer: {h.manufacturer}')
        print(f'Product: {h.product}')
        print(f'Serial Number: {h.serial}')

        dev = RODOS56(h)
        print("ID:", dev.get_id())
        dev.read_temp()
