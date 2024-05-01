import React, { useState } from 'react';
import './Dashboard.scss';
import user from '../../assets/images/user.png';
import dowmArrow from '../../assets/images/Down_Arrow_3_.png';
import calenar from '../../assets/images/Group 1311.png';

import Buttons from '../../Component/Buttons';
import {
  CalenderSvg,
  CloockSvg,
  EyeSvg,
  LayerThree,
  NoteSvg,
  ThreeDotSvg,
  UpArrow,
} from '../../assets/SvgIcons/Svg';
import FormInputs from '../../Component/Forms';
import office_girl from '../../assets/images/office_girl 1.png';
import girl from '../../assets/images/girl 2.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', value: 400, value2: 2400 },
  { month: 'Feb', value: 300, value2: 1398 },
  { month: 'Mar', value: 200, value2: 9800 },
  { month: 'Apr', value: 278, value2: 3908 },
  { month: 'May', value: 189, value2: 4800 },
  { month: 'Jun', value: 239, value2: 2908 },
  { month: 'Jul', value: 349, value2: 4800 },
  { month: 'Aug', value: 239, value2: 4800 },
  { month: 'Sep', value: 439, value2: 3908 },
  { month: 'Oct', value: 349, value2: 3908 },
  { month: 'Nov', value: 439, value2: 9800 },
  { month: 'Dec', value: 489, value2: 2400 },
];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="dashboard">
      <div className="dash_header">
        <div className="lh_head">
          <h3>HR Employee</h3>
          <p>Enjoy your selecting potential candidates Tracking and Management System.</p>
        </div>
        <div className="rh_head">
          <Buttons>Task Details</Buttons>
        </div>
      </div>

      {/* chart section */}
      <div className="chart">
        <div className="lh_chart">
          <div className="head">
            <div className="chart_info">
              <h6>Application's Info</h6>
              <div className="color_1">
                <span></span>
                Received
              </div>
              <div className="color_2">
                <span></span>
                Processed
              </div>
            </div>
            <button>
              Month
              <img src={dowmArrow} />
            </button>
          </div>

          <div>
            <ComposedChart
              width={700}
              height={300}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="value" fill="#277ACC" name="Received" />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="value2"
                stroke="#002B55"
                name="Processed"
              />
            </ComposedChart>
          </div>
        </div>
        <div className="rh_chart">
          <div className="content_dev">
            <div className="note_svg">
              <NoteSvg />
            </div>
            <h5>0033</h5>
            <p>New Assessment's</p>
          </div>
          <div className="image_dev">
            <img src={office_girl} alt="user" />
            <img className="girl" src={girl} alt="user" />
            <Buttons>VIEW DETAILS</Buttons>
          </div>
        </div>
      </div>

      <div className="all_cart">
        <div className="lh_cart">
          <div className="meeting">
            <div className="head">
              <h6>Today Interviews Meetings Info</h6>
              <ThreeDotSvg />
            </div>
            <div className="body">
              <div className="cart">
                <div className="lh_meet_cart">
                  <img src={user} alt="user" />
                  <p>John Smith</p>
                  <p>angular Developer</p>
                  <div className="meet_time">
                    <div>
                      <CloockSvg />
                      <p>19th Feb 2024</p>
                    </div>

                    <div>
                      <CloockSvg />
                      <p>10.30 Am</p>
                    </div>
                  </div>
                </div>
                <div className="rh_meet_cart">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>1st Level: 7/10</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>2st Level: 7/10</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>3st Level: Watting</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>Meet Via: G-Meet</td>
                        <td>Attendees: stella</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn_group">
                    <Buttons>Reschedule Meeting</Buttons>
                    <Buttons>join Meeting</Buttons>
                  </div>
                </div>
              </div>

              <div className="cart">
                <div className="lh_meet_cart">
                  <img src={user} alt="user" />
                  <p>John Smith</p>
                  <p>angular Developer</p>
                  <div className="meet_time">
                    <div>
                      <CloockSvg />
                      <p>19th Feb 2024</p>
                    </div>

                    <div>
                      <CloockSvg />
                      <p>10.30 Am</p>
                    </div>
                  </div>
                </div>
                <div className="rh_meet_cart">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>1st Level: 7/10</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>2st Level: 7/10</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>3st Level: Watting</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>Meet Via: G-Meet</td>
                        <td>Attendees: stella</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn_group">
                    <Buttons>Reschedule Meeting</Buttons>
                    <Buttons>join Meeting</Buttons>
                  </div>
                </div>
              </div>
              <div className="cart">
                <div className="lh_meet_cart">
                  <img src={user} alt="user" />
                  <p>John Smith</p>
                  <p>angular Developer</p>
                  <div className="meet_time">
                    <div>
                      <CloockSvg />
                      <p>19th Feb 2024</p>
                    </div>

                    <div>
                      <CloockSvg />
                      <p>10.30 Am</p>
                    </div>
                  </div>
                </div>
                <div className="rh_meet_cart">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>1st Level: 7/10</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>2st Level: 7/10</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>3st Level: Watting</td>
                        <td>interviewer: stella</td>
                      </tr>
                      <tr>
                        <td>Meet Via: G-Meet</td>
                        <td>Attendees: stella</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn_group">
                    <Buttons>Reschedule Meeting</Buttons>
                    <Buttons>join Meeting</Buttons>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* meeting  */}
          <div className="job">
            <div className="head">
              <div className="lh_head">
                <h6>Posted Jobs</h6>
                <a href="#">View All</a>
              </div>
              <div className="rh_head">
                <FormInputs type={'text'} name={'search'} id={'search'} placeholder={'Search'} />

                <Buttons>
                  <LayerThree />
                  Filters
                </Buttons>
              </div>
            </div>
            <div className="head_text">
              <p>Active Jobs</p>
              <p>Pending Jobs</p>
            </div>
            <div className="body">
              <div className="cart">
                <div className="cart_head">
                  <p>Angular Developer</p>
                  <ThreeDotSvg />
                </div>

                <div className="cart_body">
                  <p>senior Developer</p>
                  <span>258</span>
                  <p>Total Aplication</p>
                </div>

                <div className="cart_footer">
                  <div className="lh_cart_footer">
                    <UpArrow /> <span className="devp_postion">28%</span> vs last month
                  </div>
                  <div className="rh_cart_footer">6 mins ago</div>
                </div>
              </div>
              <div className="cart">
                <div className="cart_head">
                  <p>Angular Developer</p>
                  <ThreeDotSvg />
                </div>

                <div className="cart_body">
                  <p>senior Developer</p>
                  <span>258</span>
                  <p>Total Aplication</p>
                </div>

                <div className="cart_footer">
                  <div className="lh_cart_footer">
                    <UpArrow /> <span className="devp_postion">28%</span> vs last month
                  </div>
                  <div className="rh_cart_footer">6 mins ago</div>
                </div>
              </div>
              <div className="cart">
                <div className="cart_head">
                  <p>Angular Developer</p>
                  <ThreeDotSvg />
                </div>

                <div className="cart_body">
                  <p>senior Developer</p>
                  <span>258</span>
                  <p>Total Aplication</p>
                </div>

                <div className="cart_footer">
                  <div className="lh_cart_footer">
                    <UpArrow /> <span className="devp_postion">28%</span> vs last month
                  </div>
                  <div className="rh_cart_footer">6 mins ago</div>
                </div>
              </div>
              <div className="cart">
                <div className="cart_head">
                  <p>Angular Developer</p>
                  <ThreeDotSvg />
                </div>

                <div className="cart_body">
                  <p>senior Developer</p>
                  <span>258</span>
                  <p>Total Aplication</p>
                </div>

                <div className="cart_footer">
                  <div className="lh_cart_footer">
                    <UpArrow /> <span className="devp_postion">28%</span> vs last month
                  </div>
                  <div className="rh_cart_footer">6 mins ago</div>
                </div>
              </div>
            </div>
          </div>

          <div className="status">
            <div className="head">
              <div className="lh_head">
                <h6>Candidate Status</h6>
                <a href="#">View All</a>
              </div>
              <div className="rh_head">
                <FormInputs type={'text'} name={'search'} id={'search'} placeholder={'Search'} />

                <Buttons>
                  <LayerThree />
                  Filters
                </Buttons>
              </div>
            </div>
            <div className="body">
              <table className="table">
                <thead>
                  <tr>
                    <th>job ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>1st Level</th>
                    <th>2nd Level</th>
                    <th>3rd Level</th>
                    <th>4th Level</th>
                    <th>Total Marks</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#001</td>
                    <td>John Doe</td>
                    <td>Web Designer</td>
                    <td>6/10</td>
                    <td>7/10</td>
                    <td>3/10</td>
                    <td>...</td>
                    <td>...</td>
                    <td className="actived">
                      <span>Active</span>
                    </td>
                    <td>
                      <EyeSvg />
                    </td>
                  </tr>
                  <tr>
                    <td>#001</td>
                    <td>John Doe</td>
                    <td>Web Designer</td>
                    <td>6/10</td>
                    <td>7/10</td>
                    <td>3/10</td>
                    <td>...</td>
                    <td>...</td>
                    <td className="hired">
                      <span>Hired</span>
                    </td>
                    <td>
                      <EyeSvg />
                    </td>
                  </tr>
                  <tr>
                    <td>#001</td>
                    <td>John Doe</td>
                    <td>Web Designer</td>
                    <td>6/10</td>
                    <td>7/10</td>
                    <td>3/10</td>
                    <td>...</td>
                    <td>...</td>
                    <td className="reject">
                      <span>Reject</span>
                    </td>
                    <td>
                      <EyeSvg />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rh_cart">
          <div className="calender">
            <Calendar onChange={setDate} value={date} />
          </div>

          <div className="upcoming">
            <div className="head">
              <h6>Upcomings</h6>
              <a href="#">View All</a>
            </div>
            <div className="body">
              <div className="cart">
                <div className="date">
                  <span>10</span>
                  <span>Feb</span>
                </div>
                <div className="details">
                  <p className="position">interview with Designer</p>
                  <p className="author">
                    Created by <span className="creater_name">Stella</span>
                  </p>
                  <p className="time">10:00 AM to 11:00 AM</p>
                </div>
                <Buttons>Details</Buttons>
              </div>
              <div className="cart">
                <div className="date">
                  <span>10</span>
                  <span>Feb</span>
                </div>
                <div className="details">
                  <p className="position">interview with Designer</p>
                  <p className="author">
                    Created by <span className="creater_name">Stella</span>
                  </p>
                  <p className="time">10:00 AM to 11:00 AM</p>
                </div>
                <Buttons>Details</Buttons>
              </div>
              <div className="cart">
                <div className="date">
                  <span>10</span>
                  <span>Feb</span>
                </div>
                <div className="details">
                  <p className="position">interview with Designer</p>
                  <p className="author">
                    Created by <span className="creater_name">Stella</span>
                  </p>
                  <p className="time">10:00 AM to 11:00 AM</p>
                </div>
                <Buttons>Details</Buttons>
              </div>
            </div>
          </div>

          <div className="activity">
            <div className="head">
              <h6>activity</h6>
              <a href="#">View All</a>
            </div>
            <div className="body">
              <div className="cart">
                <img src={user} alt="user" />
                <div>
                  <p className="position">
                    John Doe <span className="devp_postion">[python Developer]</span>
                  </p>
                  <p className="author"> interview with Stella</p>
                  <p className="time">15 mins ago</p>
                </div>
              </div>
              <div className="cart">
                <img src={user} alt="user" />
                <div>
                  <p className="position">
                    John Doe <span className="devp_postion">[python Developer]</span>
                  </p>
                  <p className="author"> interview with Stella</p>
                  <p className="time">15 mins ago</p>
                </div>
              </div>
              <div className="cart">
                <img src={user} alt="user" />
                <div>
                  <p className="position">
                    John Doe <span className="devp_postion">[python Developer]</span>
                  </p>
                  <p className="author"> interview with Stella</p>
                  <p className="time">15 mins ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hiring">
            <div className="head">
              <h6>Hiring Candidates</h6>
              <a href="#">View All</a>
            </div>
            <div className="body">
              <div className="cart">
                <img src={user} alt="user" />
                <div className="details">
                  <p className="position">johon Don</p>
                  <p className="author">senior python Developper </p>
                  <p className="time">
                    Hired by : <span>Stella</span>
                  </p>
                </div>
                <Buttons>Details</Buttons>
              </div>
              <div className="cart">
                <img src={user} alt="user" />
                <div className="details">
                  <p className="position">johon Don</p>
                  <p className="author">senior python Developper </p>
                  <p className="time">
                    Hired by : <span>Stella</span>
                  </p>
                </div>
                <Buttons>Details</Buttons>
              </div>
              <div className="cart">
                <img src={user} alt="user" />
                <div className="details">
                  <p className="position">johon Don</p>
                  <p className="author">senior python Developper </p>
                  <p className="time">
                    Hired by : <span>Stella</span>
                  </p>
                </div>
                <Buttons>Details</Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
