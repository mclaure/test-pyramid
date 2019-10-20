#Search.feature
Feature: Search Soccer-Player Testing
    I should be able to go to a website
    and check its soccer-playe search functionality   
    Scenario: Soccer-Player search for Adam    
        When I search for an existing player "Adam"
        Then I should see a successful message like "Soccer Players Found" in the result
    Scenario: Soccer-Player search for Carlos    
        When I search for a no existing player "Carlos"
        Then I should see an unsuccessful message like "No Soccer Player Found!" in the result        