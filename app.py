from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Home route
@app.route("/")
def home():
    return render_template("chat.html")

# Chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    # Placeholder AI response logic
    if user_message:
        response = f"Pro says: I received your message: '{user_message}'."
    else:
        response = "Pro says: Can you rephrase that? I didn't catch it."

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
