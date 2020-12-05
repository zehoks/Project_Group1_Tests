select *
from theme
select *
from question
select *
from theme_question
select *
from answer_question

BEGIN;
    INSERT INTO theme
        (name, description)
    VALUES
        ('Астрономия', 'Здесь вы можете проверить свои знания астрономии');
    COMMIT;

    BEGIN;
        INSERT INTO question
            (q_text)
        VALUES
            ('Ярчайшая звезда в северном полушарии');
        COMMIT;

        BEGIN;
            INSERT INTO theme_question
                (theme_id, question_id)
            VALUES
                ('1', '2');
            COMMIT;

            BEGIN;
                INSERT INTO answer_question
                    (question_id, answer_text,result_)
                VALUES
                    ('2', 'Полярная', '0'),
                    ('2', 'Капелла', '0'),
                    ('2', 'Арктур', '1'),
                    ('2', 'Бетельгейзе', '0');
                COMMIT;