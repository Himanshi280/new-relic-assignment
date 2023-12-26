import React from 'react';
import { BarChart } from 'nr1'
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class Nerdlet1Nerdlet extends React.Component {
  render() {
    return <>
    <h1>Hello, nerdlet1 Nerdlet!</h1>
    <BarChart
      accountIds={[4268478]}
      query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDI2ODQ3OHxJTkZSQXxOQXw5MTQ0MTQwMjc5NDU0Mzc5NTk3' TIMESERIES auto"
      fullWidth
      />
    <BarChart
      accountIds={[4268478]}
      query="SELECT average(host.loadAverageOneMinute) as '1 minute', average(host.loadAverageFiveMinute) AS '5 minutes', average(host.loadAverageFifteenMinute) AS '15 minutes' FROM Metric WHERE `entityGuid` = 'NDI2ODQ3OHxJTkZSQXxOQXw5MTQ0MTQwMjc5NDU0Mzc5NTk3' TIMESERIES auto"
      fullWidth
      />
    <BarChart
      accountIds={[4268478]}
      query="SELECT count(*) FROM Public_APICall"
      fullWidth
      />
      <p>Hello this is a paragraph.</p>
      </>
  }
}
