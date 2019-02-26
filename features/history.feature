Feature: History
  As a system administrator
  I want to see the what changes have been made to a project
  So that I can identify suspicious activity

Scenario: Creating a project
  When a project is created
  Then the history contains one event
  And the history says project was created

Scenario: Add a member
  Given a project
  When a member is added to the project
  Then the history says member was added

Scenario: Multiple events
  Given a project
  When a member is added to the project
  And a member is added to the project
  Then the history contains 3 events

Scenario: Sorting
  Given a project
  When some changes are made
  Then events are sorted by timestamp, starting with the most recent one
