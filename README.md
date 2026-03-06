# SAP Supplier Collaboration Agent

## Architecture

![Architecture Diagram](./architecture.png)

## Setup Steps

1. Clone the repository.
2. Run `docker-compose up --build` to start all services.
3. Access the Supplier Portal at `http://localhost:3001`.

## API Contracts

- Forecasting Engine: `/forecast` POST
- Supplier Collaboration API: `/commitments` POST

## Runbook

- To add a new supplier, update the supplier database and restart the services.
- Monitor logs for errors and use the health endpoints to check service status.
