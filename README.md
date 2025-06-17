# Graph Portfolio

A minimalistic, techy, Django-based portfolio website with interactive graph-based navigation.

## Features
- Dark, minimal design
- Central profile node with graph-based navigation
- Interactive, expandable nodes for sections and articles
- Powered by Django backend and vis.js frontend

## Quickstart

1. Clone the repo:
   ```bash
   git clone https://github.com/defreeze/graph-portfolio.git
   cd graph-portfolio
   ```
2. Install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install -r requirements.txt
   ```
3. Run migrations and create a superuser:
   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```
4. Start the server:
   ```bash
   python manage.py runserver
   ```
5. Visit http://127.0.0.1:8000/ to see your portfolio.

## Customization
- Add/edit nodes and articles via the Django admin at http://127.0.0.1:8000/admin/
- Replace the profile icon in the center node with your own image in the frontend code.

---

Built with ❤️ using Django and vis.js.
