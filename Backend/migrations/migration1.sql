CREATE TABLE theme (
	id serial PRIMARY KEY,
	name varchar(255) NOT NULL UNIQUE,
	description varchar(255)
)

CREATE TABLE question (
	id serial PRIMARY KEY,
	q_text varchar(255) NOT NULL
)

CREATE TABLE theme_question (
	theme_id integer REFERENCES theme,
	question_id integer REFERENCES question,
	PRIMARY KEY(theme_id, question_id)
)

CREATE TABLE answer_question (
	id serial PRIMARY KEY,
	question_id integer REFERENCES question,
	answer_text varchar(255) NOT NULL,
	result_ integer,
)

CREATE TABLE theme_phrase (
	id serial PRIMARY KEY,
	theme_id integer REFERENCES theme,
	max_value integer NOT NULL,
	phrase varchar(500) NOT NULL
)