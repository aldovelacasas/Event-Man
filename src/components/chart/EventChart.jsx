
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import useEvents from '../../hooks/useEvents';

const EventChart = () => {
  const { events } = useEvents();
  const chartRef = useRef();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const formatMonth = d3.timeFormat('%b');

    const eventsByMonth = events.reduce((acc, event) => {
      const date = new Date(event.date);
      const monthYear = formatMonth(date);
      acc[monthYear] = (acc[monthYear] || 0) + 1;
      return acc;
    }, {});

    const data = Object.entries(eventsByMonth).map(([month, count]) => ({
      month,
      count,
    }));

    setChartData(data);
  }, [events]);
  
  useEffect(() => {
    const svg = d3.select(chartRef.current);

    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(chartData.map((d) => d.month))
      .range([40, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.count)])
      .nice()
      .range([height, 0]);

      svg.select('.x-axis')
      .call(d3.axisBottom(x))
      .selectAll('line')
      .attr('stroke', 'blue') // Cambiar color del eje X
      .attr('stroke-width', '2'); // Cambiar grosor del eje X       

      svg.select('.x-axis')
      .selectAll('.tick line') // Para las líneas largas del eje X
     .attr('stroke', 'blue') // Cambiar color de las líneas largas del eje X
     .attr('stroke-width', '3'); // Cambiar grosor de las líneas largas del eje X

      svg.select('.y-axis')
      .call(d3.axisLeft(y).ticks(5))
      .selectAll('line', )
      .attr('stroke', 'green') // Cambiar color del eje Y
      .attr('stroke-width', '3'); // Cambiar grosor del eje Y

      svg.select('.y-axis')
      .selectAll('.tick line') // Para las líneas largas del eje Y
      .attr('stroke', 'blue') // Cambiar color de las líneas largas del eje Y
      .attr('stroke-width', '4'); // Cambiar grosor de las líneas largas del eje Y

    svg.selectAll('.bar')
      .data(chartData)
      .join('rect')
      .attr('class', 'bar')
      .attr("stroke", "violet")
      .attr('x', (d) => x(d.month))
      .attr('y', (d) => y(d.count))
      .attr('width', x.bandwidth() -20)
      .attr('height', (d) => height - y(d.count))
      .attr('fill', '#F2D338')
      svg.attr('width', '100%').attr('height', '100%').attr('viewBox', `0 0 500 300`)

      .style('display', chartData.length > 0 ? 'block' : 'none');

  }, [chartData]);

  return (
    <>
      {chartData.length > 0 && (
            <svg ref={chartRef} style={{ width: '100%', height: '100%' }}>

          <g className="x-axis" transform={`translate(0, ${300 - 30})`} />
          <g className="y-axis" transform={`translate(40, 0)`} />
        </svg>
      )}
    </>
  );
};

export default EventChart;































