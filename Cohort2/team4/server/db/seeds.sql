-- Seed data for the 'users' table
INSERT INTO users (id, email, first_name, last_name)
VALUES
    (1, 'john@example.com', 'John', 'Doe'),
    (2, 'jane@example.com', 'Jane', 'Smith'),
    (3, 'mike@example.com', 'Mike', 'Johnson');

-- Seed data for the 'events' table
INSERT INTO events (event_id, event_name, event_short_description, event_long_description, event_city, event_state, event_country, event_address, event_date, event_host)
VALUES
    (1, 'Conference 2023', 'A conference for professionals', 'This conference brings together experts from various industries to discuss the latest trends and innovations.', 'New York', 'NY', 'USA', '123 Main St', '2023-10-15 09:00:00', 1),
    (2, 'Workshop Series', 'Hands-on workshops for skill development', 'Join us for a series of workshops where you can learn practical skills and techniques.', 'San Francisco', 'CA', 'USA', '456 Elm St', '2023-09-22 14:30:00', 2),
    (3, 'Networking Event', 'An evening of networking and socializing', 'Connect with professionals from various industries and expand your network.', 'London', 'N/A', 'UK', '789 Oak St', '2023-11-05 18:00:00', 3);

-- -- Seed data for the 'event_attendee' table
-- INSERT INTO event_attendee (attendance_id, event_id, user_id, speaker, date_registered)
-- VALUES
--     (1, 1, 2, 0, '2023-10-01 10:15:00'),
--     (2, 1, 3, 1, '2023-09-28 14:45:00'),
--     (3, 2, 1, 0, '2023-09-15 09:30:00'),
--     (4, 2, 3, 0, '2023-09-20 16:20:00'),
--     (5, 3, 1, 0, '2023-10-25 11:00:00'),
--     (6, 3, 2, 0, '2023-10-30 08:45:00');

-- -- Seed data for the 'ticket' table
-- INSERT INTO ticket (ticket_id, ticket_type, belongs_to)
-- VALUES
--     (1, 1, 2),
--     (2, 2, 3),
--     (3, 1, 1),
--     (4, 2, 1),
--     (5, 3, 3);

-- -- Seed data for the 'ticket_type' table
-- INSERT INTO ticket_type (type_id, event_id, ticket_name, ticket_price, ticket_description)
-- VALUES
--     (1, 1, 'Standard', 100.00, 'Access to all conference sessions'),
--     (2, 1, 'VIP', 250.00, 'Priority seating and exclusive networking opportunities'),
--     (3, 2, 'Beginner Workshop', 50.00, 'Introduction to basic concepts'),
--     (4, 2, 'Advanced Workshop', 75.00, 'In-depth coverage of advanced topics'),
--     (5, 3, 'General Admission', 25.00, 'Entry to the networking event');