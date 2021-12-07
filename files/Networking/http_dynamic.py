import time
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, HTTPServer


class Handler(BaseHTTPRequestHandler):

    def _header(self):
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-type", "text/html")
        self.end_headers()

    def do_HEAD(self):
        self._header()

    def do_GET(self):
        self._header()
        counter = 0
        while True:
            time.sleep(0.5)
            counter += 1
            data = "<p>" + str(counter) + "</p>\n"
            data =  bytes(data, "utf-8")
            self.wfile.write(data)
            self.




def run(server_class=HTTPServer, handler_class=BaseHTTPRequestHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()


if __name__ == '__main__':
    run(handler_class=Handler)