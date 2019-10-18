Feature: Is the player exists?
  We want to know if the soccer player exists

  Scenario Outline: Looking for existing and non-existing player
    Given player's name is "<name>"
    When I ask whether it's player exists
    Then I should be told "<answer>"

  Examples:
    | name    | answer |
    | Adam    | true   |
    | Abel    | true   |    
    | Carlos  | false  |
    | Miguel  | false  |    