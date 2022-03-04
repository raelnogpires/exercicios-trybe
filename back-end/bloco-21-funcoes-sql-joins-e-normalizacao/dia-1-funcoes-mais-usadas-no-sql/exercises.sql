SELECT * FROM hr.employees;

-- Uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY) FROM hr.employees;

-- Uma query que exiba a diferença entre o maior e o menor salário.
SELECT (MAX(SALARY) - MIN(SALARY)) FROM hr.employees;

-- Uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID, AVG(SALARY) AS `AVERAGE` FROM hr.employees
GROUP BY JOB_ID
ORDER BY AVERAGE DESC;

-- Uma query que exiba a quantidade de dinheiro necessária
-- para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) FROM hr.employees;

-- Uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e
-- a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT ROUND(MAX(SALARY), 2) AS 'MAIOR',
ROUND(MIN(SALARY), 2) AS 'MENOR',
ROUND(SUM(SALARY), 2) AS 'SOMA',
ROUND(AVG(SALARY), 2) AS 'MEDIA' FROM hr.employees;

-- Uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).
SELECT JOB_ID, COUNT(*) AS 'TOTAL' FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro
-- necessária para cobrir a folha de pagamento das pessoas programadoras.
SELECT JOB_ID, SUM(SALARY) AS 'TOTAL' FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- Uma query que exiba em ordem decrescente a média salarial de todos os cargos,
-- exceto das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, AVG(SALARY) AS 'AVERAGE' FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY AVERAGE DESC;

-- Uma query que exiba média salarial e o número de funcionários de todos os departamentos
-- com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT DEPARTMENT_ID AS 'DEPARTMENT', ROUND(AVG(SALARY), 2) AS 'AVERAGE' FROM hr.employees
GROUP BY DEPARTMENT
HAVING COUNT(*) > 10;

-- Uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones
-- iniciados por 515 agora devem iniciar com 777.
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

-- Uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT FIRST_NAME FROM hr.employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

-- Uma query que exiba as seguintes informações de cada funcionário:
-- id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT
	EMPLOYEE_ID AS ID, FIRST_NAME AS `NAME`, YEAR(HIRE_DATE) AS `YEAR`
FROM hr.employees;

-- Uma query que exiba as seguintes informações de cada funcionário:
-- id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT
	EMPLOYEE_ID AS ID, FIRST_NAME AS `NAME`, DAY(HIRE_DATE) AS `DAY`
FROM hr.employees;

-- Uma query que exiba as seguintes informações de cada funcionário:
-- id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT
	EMPLOYEE_ID AS ID, FIRST_NAME AS `NAME`, MONTH(HIRE_DATE) AS `MONTH`
FROM hr.employees;

-- Uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(FIRST_NAME) FROM hr.employees;

-- Uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT 
	LAST_NAME,
    HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE LIKE '1987-07%';

-- uma query que exiba as seguintes informações de cada funcionário:
-- nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT
	FIRST_NAME,
    LAST_NAME,
    DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS `DAYS_WORKED`
FROM hr.employees;
