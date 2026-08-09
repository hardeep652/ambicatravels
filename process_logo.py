import re
import base64
from PIL import Image
import io

with open('public/AT.svg', 'r') as f:
    content = f.read()

match = re.search(r'data:image/jpeg;base64,([^"]+)', content)
if match:
    b64_data = match.group(1)
    image_data = base64.b64decode(b64_data)
    
    img = Image.open(io.BytesIO(image_data))
    img = img.convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    # White background removal (with some tolerance for JPEG artifacts)
    for item in datas:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save("public/AT.png", "PNG")
    print("Successfully saved public/AT.png")
else:
    print("Could not find base64 data")
