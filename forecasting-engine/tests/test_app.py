import pytest
from app import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_forecast(client):
    response = client.post('/forecast', json={
        'historical_demand': [{'ds': '2023-01-01', 'y': 100}, {'ds': '2023-01-08', 'y': 150}]
    })
    assert response.status_code == 200
    assert 'yhat' in response.json[0]