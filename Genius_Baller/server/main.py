import os
from dotenv import load_dotenv
from flask import Flask, render_template,render_template_string
from flask_socketio import SocketIO
from flask_cors import CORS

load_dotenv()
static_dir = os.path.join(os.path.dirname(__file__), 'dist')
#static_folder = os.path.abspath('dist/GreatBasketball/')
print(static_dir)
app = Flask(__name__, template_folder= 'template',static_url_path='/static')
CORS(app)
app.config['SECRET_KEY'] = 'secrete key'
socket_io = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')

@socket_io.on('res-data')
def summer_camp():
    socket_io.emit('res-data')



if __name__ == "__main__":
    app.run( debug=True)