# Running the Backend

- Creatiion of the virtual environnment

```bash
python3 -m venv venv
```

- Avtivation of the virtual envirennement

```bash
source venv/bin/activate
```

- Installation of the project dependencies

```bash
cd Django &&
pip install -r requirements.txt
```

- Migrating the database

```bash
python manage.py migrate
```

- Populating the database

```bash
python manage.py seed_db
```
