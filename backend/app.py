from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route("/update-section", methods=["POST"])
def log_edit():
    try:
        data = request.get_json()

        component = data.get("urlName")  
        field = "details"                
        new_value = {
            "url":data.get("urlName"),
            "text": data.get("text"),
            "color": data.get("color"),
            "size": data.get("size")
        }

        print("FRONTEND EDIT DETECTED")
        print(f"Component: {component}")
        print(f"Field: {field}")
        print("New Value:")
        print(new_value)
        print("-" * 50)

        return jsonify({"message": "Edit logged successfully", "received": data}), 200

    except Exception as e:
        print("Error logging edit:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
