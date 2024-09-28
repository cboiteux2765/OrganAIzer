import gradio as gr
from transformers import AutoTokenizer, AutoModelForCausalLM
from PIL import Image

# Load your custom Hugging Face model
model_id = "vikhyatk/moondream2"
revision = "2024-07-23"
model = AutoModelForCausalLM.from_pretrained(
    model_id, trust_remote_code=True, revision=revision
)
tokenizer = AutoTokenizer.from_pretrained(model_id)

def respond(image):
    prompt = "This room seems messy. How can I organize the items?"

    enc_image = model.encode_image(image)
    response = model.answer_question(enc_image, prompt, tokenizer)

    return response

# Create the Gradio interface
demo = gr.Interface(
    fn=respond,
    inputs=gr.Image(type="pil", label="Upload Image"),
    outputs=[gr.Textbox(label="Suggestions")],
    title="Space Organizer",
    description="Upload an image of your space, and get suggestions on how to organize it better."
).launch(share=True)