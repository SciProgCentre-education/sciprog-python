import socketserver

class MyUDPHandler(socketserver.BaseRequestHandler):
    """
    This class works similar to the TCP handler class, except that
    self.request consists of a pair of data and client socket, and since
    there is no connection the client address must be given explicitly
    when sending data back via sendto().
    """

    players = {}

    def handle(self):
        data = self.request[0].strip()
        socket = self.request[1]
        data = data.split()
        self.players[data[0]] = data[1]
        data = b""
        for key, value in self.players.items():
            data = data + key + b" " + value + b"|"
        data += b"\n"
        # print("{} wrote:".format(self.client_address[0]), data)
        socket.sendto(data, self.client_address)

if __name__ == "__main__":
    HOST, PORT = "localhost", 9999
    with socketserver.UDPServer((HOST, PORT), MyUDPHandler) as server:
        server.serve_forever()