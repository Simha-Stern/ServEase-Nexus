-- Create table for users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    phone_password VARCHAR(255),
    address VARCHAR(255),
    active BOOLEAN NOT NULL,
    admin BOOLEAN NOT NULL,
    is_deleted BOOLEAN NOT NULL
);

-- Create table for service providers connected to users
CREATE TABLE service_providers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    fee DECIMAL(10, 2),
    fee_payment_method VARCHAR(50),
    notes TEXT,
    is_deleted BOOLEAN NOT NULL
);

-- Create table for customers connected to users
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    preferred_payment_day INTEGER
);

-- Create table for monthly services
CREATE TABLE monthly_services (
    id SERIAL PRIMARY KEY,
    service_provider_id INTEGER REFERENCES service_providers(id),
    customer_id INTEGER REFERENCES customers(id),
    description TEXT,
    monthly_price DECIMAL(10, 2),
    billing_day INTEGER,
    start_date DATE,
    end_date DATE,
    active BOOLEAN NOT NULL,
    last_payment_request_date DATE,
    regular_reminder_day INTEGER,
    regular_reminder_time TIME,
    late_payment_reminder_time TIME,
    send_notification_on_payment BOOLEAN
);

-- Create table for monthly charges
CREATE TABLE monthly_charges (
    id SERIAL PRIMARY KEY,
    monthly_service_id INTEGER REFERENCES monthly_services(id),
    payment_month DATE,
    amount_to_pay DECIMAL(10, 2),
    amount_paid DECIMAL(10, 2),
    payment_status VARCHAR(50),
    billing_day INTEGER
);

-- Create table for payments
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    service_provider_id INTEGER REFERENCES service_providers(id),
    payment_date DATE,
    payment_amount DECIMAL(10, 2),
    net_amount DECIMAL(10, 2),
    payment_method VARCHAR(50)
);

-- Create table for charge payments
CREATE TABLE charge_payments (
    id SERIAL PRIMARY KEY,
    monthly_charge_id INTEGER REFERENCES monthly_charges(id),
    payment_id INTEGER REFERENCES payments(id),
    amount DECIMAL(10, 2)
);

-- Create table for monthly service commissions
CREATE TABLE service_commissions (
    id SERIAL PRIMARY KEY,
    service_provider_id INTEGER REFERENCES service_providers(id),
    month DATE,
    payment_amount DECIMAL(10, 2),
    status VARCHAR(50)
);

-- Inserting into the users table
INSERT INTO users (email, password, name, active, admin, is_deleted)
VALUES ('111111@gmail.com', '12345', 'אברהם', true, true, false),
       ('222222@gmail.com', '12345', 'יצחק', true, false, false),
       ('333333@gmail.com', '12345', 'יעקב', true, false, false);

-- Inserting into the service_providers table
INSERT INTO service_providers (user_id, fee, fee_payment_method, notes, is_deleted)
VALUES (2, 50.00, 'Credit Card', 'Some notes about the provider', false);

-- Inserting into the customers table
INSERT INTO customers (user_id, preferred_payment_day)
VALUES (3, 10);

-- Inserting into the monthly_services table
INSERT INTO monthly_services (service_provider_id, customer_id, description, monthly_price, billing_day, start_date, end_date, active, last_payment_request_date, regular_reminder_day, regular_reminder_time, late_payment_reminder_time, send_notification_on_payment)
VALUES (1, 1, 'מנקה חדר מדרגות', 250.00, 10, '2023-01-01', '2023-12-31', true, '2023-12-10', 7, '08:00:00', '18:00:00', true);

-- Inserting into the monthly_charges table
INSERT INTO monthly_charges (monthly_service_id, payment_month, amount_to_pay, amount_paid, payment_status, billing_day)
VALUES (1, '2023-12-01', 250.00, 250.00, 'Paid', 10);

-- Inserting into the payments table
INSERT INTO payments (customer_id, service_provider_id, payment_date, payment_amount, net_amount, payment_method)
VALUES (1, 1, '2023-12-01', 250.00, 250.00, 'Credit Card');

-- Inserting into the charge_payments table
INSERT INTO charge_payments (monthly_charge_id, payment_id, amount)
VALUES (1, 1, 250.00);

-- Inserting into the service_commissions table
INSERT INTO service_commissions (service_provider_id, month, payment_amount, status)
VALUES (1, 12, 20.00, 'Pending');
