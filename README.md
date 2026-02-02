# Brain Games

[![Actions Status](https://github.com/pilgrim-nord/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/pilgrim-nord/frontend-project-44/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=pilgrim-nord_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=pilgrim-nord_frontend-project-44)
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=pilgrim-nord_frontend-project-44)](https://sonarcloud.io/summary/new_code?id=pilgrim-nord_frontend-project-44)

## Описание

Brain Games — это набор из пяти консольных математических игр, разработанных в рамках учебного проекта Hexlet. Каждая игра задаёт вопросы, на которые нужно дать правильные ответы. После трёх правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти её ещё раз.

## Установка

```bash
# Клонирование репозитория
git clone https://github.com/pilgrim-nord/frontend-project-44.git

# Переход в директорию проекта
cd frontend-project-44

# Установка зависимостей
npm install

# Установка пакета глобально
npm link
```

## Игры

### 1. Brain Even
Проверка на чётность. Ответьте "yes", если число чётное, иначе ответьте "no".

```bash
brain-even
```

[![asciicast](https://asciinema.org/a/L7TmLdY28bjn5qzI.svg)](https://asciinema.org/a/L7TmLdY28bjn5qzI)

### 2. Brain Calc
Калькулятор. Вычислите результат арифметического выражения.

```bash
brain-calc
```

[![asciicast](https://asciinema.org/a/1MHZbXa3ai0ydD8C.svg)](https://asciinema.org/a/1MHZbXa3ai0ydD8C)

### 3. Brain GCD
Наибольший общий делитель. Найдите НОД двух чисел.

```bash
brain-gcd
```

[![asciicast](https://asciinema.org/a/mNng4EEDZS8eLg9Z.svg)](https://asciinema.org/a/mNng4EEDZS8eLg9Z)

### 4. Brain Progression
Арифметическая прогрессия. Определите пропущенное число в прогрессии.

```bash
brain-progression
```

[![asciicast](https://asciinema.org/a/i79UObCBC1oRfIFc.svg)](https://asciinema.org/a/i79UObCBC1oRfIFc)

### 5. Brain Prime
Простое ли число? Ответьте "yes", если число простое, иначе ответьте "no".

```bash
brain-prime
```

[![asciicast](https://asciinema.org/a/PU1TGhsWirJpcvJs.svg)](https://asciinema.org/a/PU1TGhsWirJpcvJs)

## Системные требования

- Node.js версии 18 или выше
- npm версии 8 или выше

## Технологии

- JavaScript (ES6+)
- readline-sync — для работы с пользовательским вводом
- ESLint — для линтинга кода

## Автор

Dmitry Melekhov

## Лицензия

ISC
