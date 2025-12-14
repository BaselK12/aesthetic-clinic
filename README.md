# **Aesthetic Clinic Website – Veloura**

A modern, elegant, and responsive website built for an aesthetic clinic.  
Designed to showcase treatments, highlight the clinic brand, and give users a smooth browsing experience across all devices.

This project demonstrates clean UI design, structured HTML/CSS, and simple modular JavaScript.

---

## 🌸 **Features**

### **✨ Modern UI**
- Warm, premium color palette  
- Mobile-friendly layout  
- Smooth transitions and clean typography  

### **💉 Treatment Menu**
- Left-side menu with clickable categories  
- Right-side panel displaying treatment details  
- Animations for better user experience  

### **⚡ Lightweight**
- Pure **HTML + CSS + JavaScript**  
- No external dependencies  
- Loads instantly even on slow devices  

### **🎨 Easy Customization**
- Global CSS variables for colors, spacing, and style  
- Simple structure for adding new treatments  
- Replaceable images in the `assets/images` directory  

---

## 📁 **Project Structure**

```
aesthetic-clinic/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

---

## 🚀 **Getting Started**

### **1. Clone the Repo**
```bash
git clone https://github.com/BaselK12/aesthetic-clinic.git
cd aesthetic-clinic
```

### **2. Run Locally**

#### **Option A: VS Code Live Server**
1. Install "Live Server" extension  
2. Right-click `index.html`  
3. Click **Open with Live Server**

#### **Option B: Python Local Server**
```bash
python3 -m http.server 8080
```
Open in your browser:
```
http://localhost:8080
```

---

## 🎛️ **Customization Guide**

### **Colors & Theme**
Edit variables in `css/style.css`:

```css
:root {
  --bg: #8b776b;
  --panel: #f7f4f1;
  --ink: #2b1d18;
  --accent: #c2a58f;
}
```

### **Treatments**
Located inside `index.html`.  
Each treatment block looks like:

```html
<li data-target="botox">Botox</li>

<div id="botox" class="panel active">
  <h2>Botox Treatment</h2>
  <p>Short description…</p>
</div>
```

Duplicate/edit as needed.

### **Images**
Add your own files to:
```
assets/images/
```
Update the references in HTML or CSS.

---

## 📦 **Deployment**

### **GitHub Pages**
1. Push repo to GitHub  
2. Go to **Settings → Pages**  
3. Deploy from `main` branch  
4. Your website goes live automatically  

### **Netlify**
- Drag & drop project folder into https://app.netlify.com/drop  

### **Vercel**
```bash
vercel deploy
```

---

## 🧰 **Tech Stack**
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**

---

## 📝 **Future Improvements**
- Online appointment booking  
- SEO enhancements  
- Dedicated treatment pages  
- Multi-language support  
- CMS panel for easy updates  

---

## 📍 **Author**
**Basel Karkabee**  
GitHub: [BaselK12](https://github.com/BaselK12)

---

## 📜 **License**
This project is open-source for educational and small-business use.  
Feel free to modify and adapt it.
