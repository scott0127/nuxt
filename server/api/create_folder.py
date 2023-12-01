from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

global_path=os.getcwd()
global_path=os.path.join(global_path,'database')#路徑到database
print(global_path)

@app.route('/api/create-folder', methods=['POST'])
def create_folder():
    data = request.get_json()
    print(data)
    name = data.get('name')
    if name:
        try:
            new_folder_path = os.path.join(global_path, name)
            print(new_folder_path)
            os.mkdir(new_folder_path)
            return jsonify(message='成功创建文件夹py')
        except OSError:
            return jsonify(message='创建文件夹失败py')
    else:
        return jsonify(message='未提供文件夹名字py')

@app.route('/api/create-table', methods=['POST'])
def create_table():
    selected_folder = request.json.get('selected_folder')
    table_name = request.json.get('table_name')
    print(request.json)
    if selected_folder and table_name:
        try:
            file_path = os.path.join(global_path, selected_folder )
            file_path = os.path.join(global_path, table_name + ".csv")
            print(file_path)
            if os.path.exists(file_path):
                return jsonify({'message': '檔案已經存在'})
            else:
                with open(file_path, 'w') as file:
                    file.write('dasd')  # 寫入表格欄位名稱
                return jsonify({'message': f'已成功建立表格 {table_name}'})
        except Exception as e:
            return jsonify({'message': f'無法建立表格: {e}'})
    else:
        return jsonify({'message': '請提供資料夾和表格名稱'})
    
@app.route('/api/folders', methods=['GET'])
def get_folders():
    folders = os.listdir(global_path)
    #print(folders)
    folder_options = [folder for folder in folders if os.path.isdir(os.path.join(global_path,folder))]
    print(folder_options)
    return jsonify({'folders': folder_options})

if __name__ == '__main__':
    app.run()