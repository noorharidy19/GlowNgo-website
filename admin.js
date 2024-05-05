// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const salesData = [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const salesData = [10, 20, 40, 25, 17, 20, 15, 11,14 , 16, 35, 45];
const orderData = [10, 25, 45, 25, 35, 29, 30, 28,35 , 45, 48, 50];

// Define Data
const data = [{
    x: months,
    y: salesData,
    mode:"lines",
    line: {             // Specify line properties
        color: 'rgb(208, 177, 177)',   // Change line color to green
        width: 2          // Optional: Change line width
      }

  }];
  const orderChartData = [{
    x: months,
    y: orderData,
    mode: "lines",
    line: {
        color: 'rgb(208, 177, 177)',
        width: 2
    },
    name: 'Number of Orders'
}];
  
  // Define Layout
  const layout = {
    xaxis: {range: ['Jan', 'Dec'], title: "Month"},
    yaxis: {range: [10, 50], title: "Number of Sales"},  
    title: "Product Sales per Month"
  };
  const orderChartLayout = {
    xaxis: {range: ['Jan', 'Dec'], title: "Month"},
    yaxis: {range: [10, 50], title: "Number of Orders"},  
    title: "Number of Orders per Month"
};
  
  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout);
  Plotly.newPlot("myPlot1", orderChartData, orderChartLayout);
