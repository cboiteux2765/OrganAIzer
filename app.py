from transformers import AutoTokenizer, AutoModelForCausalLM
import openvino as ov
import ipywidgets as widgets
import gradio as gr
from pathlib import Path
import json

# Initialize OpenVINO
core = ov.Core()
device = "NPU"
MODEL_PATH = Path("model")
MODEL_NAME = "Moondream"

# Initialize Hugging Face
model_id = "vikhyatk/moondream2"
revision = "2024-07-23"
model = AutoModelForCausalLM.from_pretrained(
    model_id, trust_remote_code=True, revision=revision
)
tokenizer = AutoTokenizer.from_pretrained(model_id)

# OpenVINO Optimization
def ov_optimize():
    core = ov.Core()
    optimized_model = core.read_model(model=model)
    compiled_model = core.read_model(model=optimized_model,device_name=device)
    ov.save_model(compiled_model, MODEL_PATH / f"{MODEL_NAME}.xml")

# Gradio functions

def generate_text(image):
    prompt = "This room seems messy. How can I organize the items?"

    enc_image = model.encode_image(image)
    response = model.answer_question(enc_image, prompt, tokenizer)

    return response
    
def respond(image):
   text = generate_text(image)
   return text

# Gradio interface
demo = gr.Interface(
    fn=respond,
    inputs=gr.Image(type="pil", label="Upload Image"),
    outputs=[gr.Textbox(label="Suggestions")],
    title="Space Organizer",
    description="Upload an image of your space, and get suggestions on how to organize it better."
).launch(share=True)