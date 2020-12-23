import styled from 'styled-components';

export const Grid = styled.section`
  grid-template-columns: 20px 187.5px 187.5px 20px;
  width: 415px;
  grid-template-rows: 25px 58px 60px 60px 20px 55px 55px 230px;
  border: 1px solid #dedede;
  box-shadow: 0px 10px 25px 4px #dedede;
  border-radius: 10px;
  display: grid;
`;

export const PricePerNight = styled.section`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  font-family: "Airbnb Cereal App";
  text-align: left;
  padding: 10px 0;
`;

export const Rating = styled.section`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  font-family: "Airbnb Cereal App";
`;

export const CheckInContainer = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 5;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  display: grid;
  font-family: "Airbnb Cereal App";
`;

export const CheckInDate = styled.section`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  border-bottom: 1px solid #b0b0b0;
  border-right: 1px solid #b0b0b0;
`;

export const Attendee = styled.section`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  border-bottom: 1px solid #b0b0b0;
`;

export const TimeIn = styled.section`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
  border-right: 1px solid #b0b0b0;
  // overflow: auto;
`;

export const TimeOut = styled.section`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
`;

export const ReserveButton = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
  border-radius: 10px;
  background-color: #e41c5c;
  font-family: "Airbnb Cereal App";
  font-weight: medium;
  text-align: center;
  color: white;
  padding-top: 17px;
  padding-bottom: 20px
`;

export const ChargeCaption = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 7;
  grid-row-end: 8;
  font-family: "Airbnb Cereal App";
  text-align: center;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const CostBreakdown = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 8;
  grid-row-end: 9;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  display: grid;
`;

export const PerNightCaption = styled.section`
  grid-column-start: 1;
  grid-column-end: two;
  grid-row-start: 1;
  grid-row-end: 1;
  font-family: "Airbnb Cereal App";
  text-align: left;
`;

export const PerNightQuote = styled.section`
  grid-column-start: 3;
  grid-column-end: three;
  grid-row-start: 1;
  grid-row-end: 1;
  font-family: "Airbnb Cereal App";
  text-align: right;
`;

export const CleaningFeeCaption = styled.section`
  grid-column-start: 1;
  grid-column-end: two;
  grid-row-start: 2;
  grid-row-end: 2;
  font-family: "Airbnb Cereal App";
  text-align: left;
  text-decoration: underline;
`;

export const CleaningFeeQuote = styled.section`
  grid-column-start: 3;
  grid-column-end: three;
  grid-row-start: 2;
  grid-row-end: 2;
  font-family: "Airbnb Cereal App";
  text-align: right;
`;

export const OccupancyTaxCaption = styled.section`
  grid-column-start: 1;
  grid-column-end: two;
  grid-row-start: 3;
  grid-row-end: 3;
  font-family: "Airbnb Cereal App";
  text-align: left;
  text-decoration: underline;
`;

export const OccupancyTaxQuote = styled.section`
  grid-column-start: 3;
  grid-column-end: three;
  grid-row-start: 3;
  grid-row-end: 3;
  font-family: "Airbnb Cereal App";
  text-align: right;
`;

export const AdditionalFees = styled.section`
  grid-column-start: 1;
  grid-column-end: three;
  grid-row-start: 4;
  grid-row-end: 4;
  border-bottom: 1px solid #dedede;
  font-family: "Airbnb Cereal App";
  text-align: left;
  text-decoration: underline;
`;

export const Total = styled.section`
  grid-column-start: 1;
  grid-column-end: two;
  grid-row-start: 5;
  grid-row-end: six;
  font-family: "Airbnb Cereal App";
  font-weight: bold;  
  text-align: left;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const TotalQuote = styled.section`
  grid-column-start: 3;
  grid-column-end: three;
  grid-row-start: 5;
  grid-row-end: six;
  font-family: "Airbnb Cereal App";
  font-weight: bold;
  text-align: right;
  padding-top: 30px;
  padding-bottom: 30px;
`;