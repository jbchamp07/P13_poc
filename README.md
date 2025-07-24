# 💻 Projet Angular + Spring Boot

Ce projet combine une interface **Angular** avec un backend **Java Spring Boot**. Il utilise **STOMP** et **SockJS** pour la communication WebSocket.

---

## 🧰 Prérequis

### Backend (Spring Boot)
- Java 17+
- Maven 3.8+

### Frontend (Angular)
- Node.js v18+ (incluant `npm`)
- Angular CLI (`npm install -g @angular/cli`)

---

## 🚀 Lancement du projet

### 1. Clone du projet

```bash
git clone https://github.com/ton-utilisateur/ton-projet.git
cd ton-projet

## 🚀 Installation
npm install @stomp/stompjs sockjs-client && npm install --save-dev @types/sockjs-client
## 🚀 Lancement (front)
ng serve --open
## 🚀 Lancement (back)
cd back
./mvnw spring-boot:run