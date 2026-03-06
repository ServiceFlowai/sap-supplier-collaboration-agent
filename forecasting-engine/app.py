from flask import Flask, jsonify, request
import pandas as pd
from prophet import Prophet

app = Flask(__name__)

@app.route('/forecast', methods=['POST'])
def forecast():
    data = request.json
    df = pd.DataFrame(data['historical_demand'])
    model = Prophet()
    model.fit(df)
    future = model.make_future_dataframe(periods=52, freq='W')
    forecast = model.predict(future)
    return jsonify(forecast.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)