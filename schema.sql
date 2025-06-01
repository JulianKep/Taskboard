CREATE TABLE tasklist (
    id INTEGER PRIMARY KEY,
    task TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0,
    descript TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--open database using sqlite3:
sqlite3 data.db

--show all data:
SELECT * FROM tasklist;

--update data:
UPDATE tasklist SET task = 'essen machen' WHERE id = 0;

--new data:
INSERT INTO tasklist (task, descript) VALUES ('Kryptographie Machen', 'blatt abgabe');


--reset all tasks:
UPDATE tasklist SET done = 0;







CREATE TABLE tasklist (
    id INTEGER PRIMARY KEY,
    task TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0,
    pending INTEGER NOT NULL DEFAULT 0,
    score INTEGER NOT NULL DEFAULT 0,
    category TEXT NOT NULL DEFAULT 'None',
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasklist (task) VALUES ('Kryptographie machen');