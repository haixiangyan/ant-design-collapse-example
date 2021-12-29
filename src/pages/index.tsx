import { Collapse } from 'antd';
import styles from './index.less';

const { Panel } = Collapse;

export default function IndexPage() {
  return (
    <div>
      <h1>Collapse</h1>
      <div className={styles.wrapper}>
        <Collapse accordion>
          <Panel header="第一" key="1">
            <div>
              <div style={{ marginBottom: 300 }}>hello</div>
              <div>world</div>
            </div>
          </Panel>
          <Panel header="第二" key="2">
            <div>
              <div style={{ marginBottom: 300 }}>hello</div>
              <div>world</div>
            </div>
          </Panel>
          <Panel header="第三" key="3">
            <div>
              <div style={{ marginBottom: 300 }}>hello</div>
              <div>world</div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
