from flask import Flask, request, jsonify
from transformers import AutoTokenizer,AutoModelForCausalLM
from PIL import Image

model_id = "vikhyatk/moondream2"
revision = "2024-07-23"
model = AutoModelForCausalLM.from_pretrained(
    model_id, trust_remote_code=True, revision=revision
)
tokenizer = AutoTokenizer.from_pretrained(model_id, revision=revision)

image = Image.open('messy.jpg')

app = Flask(__name__)

@app.route('/send_message', methods=['POST'])
def send_response():
    data = request.json
    message = data.get('message')
    response = {
        'response': model.answer_question(image, message, tokenizer)
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)