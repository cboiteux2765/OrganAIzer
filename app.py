from transformers import AutoTokenizer, AutoModelForCausalLM
from PIL import Image
from diffusers import StableDiffusionImg2ImgPipeline
import gradio as gr
import torch
import json
import time

# Load your custom Hugging Face model
model_id = "vikhyatk/moondream2"
revision = "2024-07-23"
model = AutoModelForCausalLM.from_pretrained(
    model_id, trust_remote_code=True, revision=revision
)
tokenizer = AutoTokenizer.from_pretrained(model_id)

def generate_text(image):
    prompt = "This room seems messy. How can I organize the items?"

    enc_image = model.encode_image(image)
    response = model.answer_question(enc_image, prompt, tokenizer)

    return response
    
def respond(image):
   text = generate_text(image)
   return text

# Create the Gradio interface
demo = gr.Interface(
    fn=respond,
    inputs=gr.Image(type="pil", label="Upload Image"),
    outputs=[gr.Textbox(label="Suggestions")],
    title="Space Organizer",
    description="Upload an image of your space, and get suggestions on how to organize it better."
).launch(share=True)