// STYLE
import "@style/table.scss";

const Table = () => {
  return (
    <table>
      <tbody>
        <tr className="info">
          <th colSpan={"10"}>Amount of water for spraying in liters</th>
        </tr>
        <tr className="info">
          <th rowSpan={"2"} id="conc">
            Pesticide concentration %
          </th>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>50</td>
          <td>100</td>
          <td>200</td>
          <td>300</td>
          <td>400</td>
          <td>500</td>
        </tr>
        <tr className="info">
          <th colSpan={"9"}>Amount of pesticide needed in g or ml</th>
        </tr>
        <tr>
          <td style={{ width: "25%", textAlign: "center" }}>0.01</td>
          <td>1</td>
          <td>1.5</td>
          <td>2</td>
          <td>5</td>
          <td>10</td>
          <td>20</td>
          <td>30</td>
          <td>40</td>
          <td>50</td>
        </tr>
        <tr>
          <td>0.04</td>
          <td>4</td>
          <td>6</td>
          <td>8</td>
          <td>20</td>
          <td>40</td>
          <td>80</td>
          <td>120</td>
          <td>160</td>
          <td>200</td>
        </tr>
        <tr>
          <td>0.07</td>
          <td>7</td>
          <td>11</td>
          <td>14</td>
          <td>35</td>
          <td>70</td>
          <td>140</td>
          <td>210</td>
          <td>280</td>
          <td>350</td>
        </tr>
        <tr>
          <td>0.1</td>
          <td>10</td>
          <td>15</td>
          <td>20</td>
          <td>50</td>
          <td>100</td>
          <td>200</td>
          <td>300</td>
          <td>400</td>
          <td>500</td>
        </tr>
        <tr>
          <td>0.15</td>
          <td>15</td>
          <td>22</td>
          <td>30</td>
          <td>75</td>
          <td>150</td>
          <td>300</td>
          <td>450</td>
          <td>600</td>
          <td>750</td>
        </tr>
        <tr>
          <td>0.2</td>
          <td>20</td>
          <td>30</td>
          <td>40</td>
          <td>100</td>
          <td>200</td>
          <td>400</td>
          <td>600</td>
          <td>800</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>0.25</td>
          <td>25</td>
          <td>38</td>
          <td>50</td>
          <td>125</td>
          <td>250</td>
          <td>500</td>
          <td>750</td>
          <td>1000</td>
          <td>1250</td>
        </tr>
        <tr>
          <td>0.3</td>
          <td>30</td>
          <td>45</td>
          <td>60</td>
          <td>150</td>
          <td>300</td>
          <td>600</td>
          <td>900</td>
          <td>1200</td>
          <td>1500</td>
        </tr>
        <tr>
          <td>0.4</td>
          <td>40</td>
          <td>60</td>
          <td>80</td>
          <td>200</td>
          <td>400</td>
          <td>800</td>
          <td>1200</td>
          <td>1600</td>
          <td>2000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
