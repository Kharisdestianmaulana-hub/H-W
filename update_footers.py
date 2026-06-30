import os

footer = open('/tmp/footer.html').read()

files = {
    'about.html': (155, 207),
    'contact.html': (120, 172),
    'index.html': (232, 285),
    'product-detail.html': (96, 135),
    'product.html': (62, 114)
}

for filename, (start, end) in files.items():
    with open(filename, 'r') as f:
        lines = f.readlines()
    
    new_lines = lines[:start-1] + [footer + '\n'] + lines[end:]
    
    with open(filename, 'w') as f:
        f.writelines(new_lines)

print("Updated all footers!")
