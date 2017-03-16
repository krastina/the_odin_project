class Stack:
    def __init__(self):
        self.items=[]

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items) - 1]

    def size(self):
        return len(self.items)

def revstring(mystr):
    myStack = Stack()
    for ch in mystr:
        myStack.push(ch)
    revstr = ''
    while not myStack.isEmpty():
        revstr = revstr + myStack.pop()
    return revstr

print(revstring('Sally'))
