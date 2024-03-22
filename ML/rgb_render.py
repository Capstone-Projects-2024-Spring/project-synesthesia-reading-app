import torch
import tkinter as tk

def main():
    actual = torch.empty(3)
    actual[0] = 255.1
    actual[1] = 100.5
    actual[2] = 0

    pred = torch.empty(3)
    pred[0] = 0
    pred[1] = 0
    pred[2] = 255

    swatches_from_tensors(actual=actual, predicted=pred)

def swatches_from_tensors(actual: torch.tensor, predicted: torch.tensor):
    actual_rgb = {
        "red": int(actual[0]),
        "green": int(actual[1]),
        "blue": int(actual[2])
    }
    predicted_rgb = {
        "red": int(predicted[0]),
        "green": int(predicted[1]),
        "blue": int(predicted[2])
    }
    create_colored_squares((actual_rgb["red"], actual_rgb["blue"], actual_rgb["green"]), (predicted_rgb["red"], predicted_rgb["blue"], predicted_rgb["green"]))




def create_colored_squares(rgb1, rgb2):
    root = tk.Tk()

    # Create a canvas
    canvas = tk.Canvas(root, width=500, height=200)
    canvas.pack()

    # Draw the first colored square (red)
    canvas.create_rectangle(10, 10, 90, 90, fill="#%02x%02x%02x" % rgb1)

    # Draw the second colored square (blue)
    canvas.create_rectangle(110, 10, 190, 90, fill="#%02x%02x%02x" % rgb2)

    root.mainloop()

# Check if the script is being run as the main program
if __name__ == "__main__":
    main()