import SimpleHTTPServer
import SocketServer

# minimal web server.  serves files relative to the
# current directory.

PORT = 3000

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "CUNY TECH PREP interview question is serving at port", PORT
print "navigate to http://localhost:3000"
httpd.serve_forever()