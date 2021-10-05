import tkinter as tk
from tkinter import ttk,Frame, HORIZONTAL

class Application(Frame):
    def __init__(self, master=None):
        super(Application, self).__init__()
        self.grid()
        self.createWidgets()

    def createWidgets(self):
        self.btn = tk.Button(self, text='Start Task',
                             command=self.task)
        self.btn.grid(column = 0)

    def task(self):
        bar = ttk.Progressbar(self, orient=HORIZONTAL)
        bar.grid(column = 1)
        bar.start(interval=50)


if __name__ == '__main__':
    app = Application()
    app.mainloop()