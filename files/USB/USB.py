import time

vid = 0x20A0
pid = 0x4173

# import usb.core
# import usb.util
#
#
#
# # find our device
# dev = usb.core.find(idVendor=vid, idProduct=pid)
#
# # was it found?
# if dev is None:
#     raise ValueError('Device not found')


import hid

class OneWire:
    USB_T_RX_TX_BUF_SIZE = 9

    def set_feature(self):
        self.hid.send_feature_report(bytes(self.bout))

    def get_feature(self):
        self.bin = bytearray(self.hid.get_feature_report(self.bin[0], self.USB_T_RX_TX_BUF_SIZE))

    def __init__(self,  hid: hid.Device):
        self.hid = hid
        self.bout = bytearray(self.USB_T_RX_TX_BUF_SIZE)
        self.bin = bytearray(self.USB_T_RX_TX_BUF_SIZE)

    def clear(self):
        self.bout = bytearray(self.USB_T_RX_TX_BUF_SIZE)
        self.bin = bytearray(self.USB_T_RX_TX_BUF_SIZE)

    def reset(self):
        self.clear()
        self.bout[1] = 0x18
        self.bout[2] = 0x48
        self.set_feature()
        time.sleep(0.01)
        self.get_feature()
        print(self.bin)

    def write_byte(self, byte):
        self.clear()
        self.bout[1] = 0x18
        self.bout[2] = 0x88
        self.bout[3] = byte
        self.set_feature()
        time.sleep(0.05)
        self.get_feature()

class RODOS56(OneWire):
    def __init__(self, hid: hid.Device):
        super(RODOS56, self).__init__(hid)

    def skip_rom_convert(self):
        self.reset()
        self.write_byte(0xCC)
        self.write_byte(0x44)

    def read_temp(self):
        self.skip_rom_convert()
        time.sleep(1.0)




def write_one_byte(byte):
    B1 = 0x18
    B2 = 0x88
    return bytes([B1, B2, byte])

def read_four_byte():
    B1 = 0x18
    B2 = 0x84
    B3 = 4*[0XFF]
    return bytes([B1, B2] + B3)

def reset():
    B1 = 0x18
    B2 = 0x48
    return bytes([B1, B2])


B3 = 0XCC
B4 = 0x44

with hid.Device(vid, pid) as h:
    print(f'Device manufacturer: {h.manufacturer}')
    print(f'Product: {h.product}')
    print(f'Serial Number: {h.serial}')
    dev = RODOS56(h)
    print(dev.read_temp())

if __name__ == '__main__':
    pass