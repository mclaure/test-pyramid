Feature: Is the season exists?
  We want to know if the soccer season exists

  Scenario Outline: Looking for a soccer season
    Given season's year is "<year>"
    When I ask whether it's season exists
    Then I should be told that is "<answer>" that the season exists

  Examples:
    | year  | answer |
    | 2008  | true   |
    | 2009  | true   |    
    | 2010  | false  |
    | 2011  | false  |