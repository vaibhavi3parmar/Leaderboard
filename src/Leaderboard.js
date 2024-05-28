import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const data = [
  { rank: 1, name: 'Selling with re entr', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: 0.65, slippage: 0, price: '-', action: 'View' },
  { rank: 2, name: 'strategy_name', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: 0.64, slippage: 0.5, price: 500, action: 'Buy' },
  { rank: 3, name: 'Based on premium and', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: 0.64, slippage: 1, price: '-', action: 'View' },
  { rank: 4, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, slippage: 0.5, price: '-', action: 'View' },
  { rank: 5, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, slippage: 1, price: '-', action: 'View' },
  { rank: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: 0.49, slippage: 0, price: '-', action: 'View' },
  { rank: 7, name: 'strategy_name', calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercentage: 0.6, slippage: 1, price: '-', action: 'View' },
  { rank: 8, name: 'Wait and trade_Save', calmarRatio: 2.62, overallProfit: 178252.5, avgDailyProfit: 161.9, winPercentage: 0.63, slippage: 0.5, price: '-', action: 'View' },
  { rank: 9, name: 'iron condor', calmarRatio: 2.44, overallProfit: 176420, avgDailyProfit: 137.51, winPercentage: 0.65, slippage: 0, price: '-', action: 'View' },
  { rank: 10, name: 'strategy_name', calmarRatio: 2.04, overallProfit: 244555, avgDailyProfit: 198.66, winPercentage: 0.62, slippage: 1, price: '-', action: 'View' },
];

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  color: #333;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #eaeaea;
  padding: 10px;
  border-radius: 4px;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
  font-size: 16px;
  color: #555;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Rank = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

const Metrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Metric = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #007bff;
`;

const ActionButton = styled.button`
  background-color: ${props => (props.buy ? '#28a745' : '#007bff')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => (props.buy ? '#218838' : '#0056b3')};
  }
`;

const Leaderboard = () => {
  const [selectedSlippage, setSelectedSlippage] = useState('all');

  const handleSlippageChange = (e) => {
    setSelectedSlippage(e.target.value);
  };

  const filteredData = selectedSlippage !== 'all'
    ? data.filter(item => item.slippage === parseFloat(selectedSlippage))
    : data;

  return (
    <Container>
      <HeaderContainer>
        <Title>Basic Backtest</Title>
        <FilterContainer>
          <FilterLabel htmlFor="slippage-select">Slippage:</FilterLabel>
          <Select id="slippage-select" onChange={handleSlippageChange} value={selectedSlippage}>
            <option value="all">All</option>
            <option value={0}>0%</option>
            <option value={0.5}>0.5%</option>
            <option value={1}>1%</option>
          </Select>
        </FilterContainer>
      </HeaderContainer>
      <CardGrid>
        {filteredData.map((item, index) => (
          <Card key={index}>
            <Header>
              <Rank>#{item.rank}</Rank>
              {item.action === 'Buy' ? (
                <ActionButton buy>{item.action}</ActionButton>
              ) : (
                <ActionButton>{item.action}</ActionButton>
              )}
            </Header>
            <Name>{item.name}</Name>
            <Metrics>
              <Metric>
                <span>Calmar Ratio:</span>
                <span>
                  {item.calmarRatio}{' '}
                  {item.calmarRatio >= 3 ? (
                    <FaArrowUp style={{ color: 'green' }} />
                  ) : (
                    <FaArrowDown style={{ color: 'red' }} />
                  )}
                </span>
              </Metric>
              <Metric>
                <span>Overall Profit:</span>
                <span>{item.overallProfit}</span>
              </Metric>
              <Metric>
                <span>Avg. Daily Profit:</span>
                <span>{item.avgDailyProfit}</span>
              </Metric>
              <Metric>
                <span>Win %(Day):</span>
                <span>{item.winPercentage}</span>
              </Metric>
              <Metric>
                <span>Price:</span>
                <Price>{item.price}</Price>
              </Metric>
            </Metrics>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default Leaderboard;
