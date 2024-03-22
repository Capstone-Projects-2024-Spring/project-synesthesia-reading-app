import torch
import tkinter as tk

def main():
    create_colored_squares()

def create_colored_squares():
    root = tk.Tk()

    # Create a canvas
    canvas = tk.Canvas(root, width=200, height=100)
    canvas.pack()

    # Define RGB values for colors
    red_rgb = (255, 0, 0)   # Red
    blue_rgb = (0, 0, 255)  # Blue

    # Draw the first colored square (red)
    canvas.create_rectangle(10, 10, 90, 90, fill="#%02x%02x%02x" % red_rgb)

    # Draw the second colored square (blue)
    canvas.create_rectangle(110, 10, 190, 90, fill="#%02x%02x%02x" % blue_rgb)

    root.mainloop()

# Check if the script is being run as the main program
if __name__ == "__main__":
    main()