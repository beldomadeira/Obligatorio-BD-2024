# Usa una imagen base de Python
FROM python:3.10

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del backend
COPY . /app

# Instala las dependencias
RUN pip install -r requirements.txt

# Expone el puerto 5000
EXPOSE 5001

# Comando para iniciar la aplicación
CMD ["flask", "run", "--host=0.0.0.0", "--port=5001", "--app=backend"]