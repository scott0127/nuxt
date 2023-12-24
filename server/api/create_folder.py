from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
import requests
import json
import cv2
app = Flask(__name__)
CORS(app)

global_path=os.getcwd()
global_path=os.path.join(global_path,'database')#路徑到database
print(global_path)

@app.route('/api/upload', methods=['POST'])
def upload():
    print( request.files['image'])
    #print( request.files['image'].read())
    styleImage = request.files['image'].read() #讀取二進位檔案
    styleImage = np.fromstring(styleImage, np.uint8) #轉成 ndarray 形式
    styleImage = cv2.imdecode(styleImage, cv2.IMREAD_COLOR)[:,:,::-1] # ndarray 轉換成擁有 RGB 3 個 channel 的圖像矩陣格式。
    cv2.imwrite("result.jpg", styleImage)  #可以寫入ㄌ
    print(styleImage)
    
    




if __name__ == '__main__':
    app.run()