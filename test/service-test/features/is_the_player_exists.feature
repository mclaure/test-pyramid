Feature: Is the player exists?
  We want to know if the soccer player exists

  Scenario Outline: Looking for a player
    Given player's name is "<name>"
    When I ask whether it's player exists
    Then I should be told that is "<answer>" that the player exists

  Examples:
    | name    | answer |
    | Adam    | true   |
    | Abel    | true   |    
    | Carlos  | false  |
    | Miguel  | false  |