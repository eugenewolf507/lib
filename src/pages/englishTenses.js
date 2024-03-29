import React from 'react';
import Layout from '../components/layout';

const EnglishTensesPage = () => {
  return (
    <Layout pageTitle="About Present, Past and Future">
      <h2>Present</h2>

      <h3>Regular, schedule, obligation, responsibility</h3>
      <p>
        <b>V(s)</b> - <i>do/does</i> - PRESENT SIMPLE
      </p>
      <p>обычно, я читаю</p>

      <h3>Right now, this period, temporary action</h3>
      <p>
        <b>am/is/are + Ving</b> - PRESENT CONTINUOUS
      </p>
      <p>я сейчас читаю</p>
      <p>this semester</p>

      <h2>Past</h2>

      <h3>Narrative, Activity is finished, time phrase, but not always</h3>
      <p>
        <b>Ved/V2</b> - <i>did</i> - PAST SIMPLE
      </p>
      <p>я прочитал</p>

      <h3>
        Narrative, The events taking place around the time of the story, Story
        background
      </h3>
      <p>
        <b>was/were + Ving</b> - PAST CONTINUOUS
      </p>
      <p>я читал</p>

      <h3>
        Narrative, An action that happened before something else we already
        talked about
      </h3>
      <p>
        <b>had + Ved/V3</b> - PAST PERFECT
      </p>
      <p>я читал уже тогда</p>

      <h3>Activity is still taking place or affecting the present situation</h3>
      <p>
        <b>have/has + Ved/V3</b> - PRESENT PERFECT
      </p>
      <p>focus on results - я закончил читать</p>
      <p>Я в этой компании работаю 5 лет - still taking place</p>

      <h3>Activity is still taking place or affecting the present situation</h3>
      <p>
        <b>have/has + been + Ving</b> - PRESENT PERFECT CONTINUOUS
      </p>
      <p>часто с вопросом how long</p>
      <p>focus on duration - я читаю уже два года</p>

      <h3>since/for</h3>
      <p>
        <b>since</b> - shows when activity started - PRESENT PERFECT / PERFECT
        CONTINUOUS
      </p>
      <p>
        <b>for</b> - shows the length - PAST SIMPLE, PRESENT PERFECT / PERFECT
        CONTINUOUS
      </p>

      <h2>Future</h2>
      <h3>Спонтанность, неуверенность</h3>
      <p>
        <b>will + V</b> - FUTURE SIMPLE - я прочитаю
      </p>

      <h3>Definite plans / Questions about plans</h3>
      <div>
        <p>
          <b>am/is/are + going to + V</b>
        </p>
        <p>
          <b>am/is/are + Ving</b> - PRESENT CONTINUOUS
        </p>
      </div>

      <h3>Obligation</h3>
      <p>
        <b>have to + V</b>
      </p>

      <h3>Less certain plans</h3>
      <p>
        <b>will + probably/possibly + V</b>
      </p>
      <p>
        <b>probably won`t + V</b>
      </p>
      <p>
        <b>be thinking of + Ving</b>
      </p>
      <p>
        <b>might/may (possibly) (not) + V</b>
      </p>

      {/* Future time clauses */}
      <h2>Future time clauses</h2>
      <p>
        Сложенное предложение состоит из двух clauses.
        <br />Я должен прибрать в квартире, до того как моя мама прийдет
      </p>
      <p>Правило:</p>
      <ol>
        <li>Половинки предложения могут меняться местами</li>
        <li>
          Future time clauses говорит только о том, что
          <ul>
            <li>
              событие которое будет дальше/более будующее должно быть во времени
              Present Simple
            </li>
            <li>
              проще ориентироваться по вспомагательным словам: после слов when,
              after, once должен идти Present Simple
            </li>
          </ul>
        </li>
      </ol>
      {/* Conditional */}
      <h2>Conditional</h2>

      <ul>
        <li>Conditional - это условное предложение</li>
        <li>
          Состоит из двух частей
          <ul>
            <li>If clause - должен быть if / unless</li>
            <li>Main clause</li>
          </ul>
        </li>
        <li>Части могут меняться местами</li>
        <li>Время закрепляеться за If или Main clause</li>
      </ul>

      <ol start="0">
        <li>
          Законы природы или факты
          <ul>
            <li>If clause - Present Simple</li>
            <li>Main clause - Present Simple</li>
            <li>Снег растает, если его нагреть</li>
            <li>Не так часто используеться</li>
          </ul>
        </li>
        <li>
          Возможная ситуация в будующем
          <ul>
            <li>If clause - Present Simple</li>
            <li>Main clause - Future Simple</li>
            <li>Если мне дадут отпуск, то я поеду в Италию</li>
            <li>Часто используется</li>
          </ul>
        </li>
        <li>
          Невозможная или маловероятная ситуация действующая сейчас или в
          будующем
          <ul>
            <li>If clause - Past Simple</li>
            <li>Main clause - would + V</li>
            <li>Если бы мне дали отпуск, я бы поехала в Италию</li>
            <li>На твоем месте ... - If I were you ...</li>
          </ul>
        </li>
        <li>
          К прошлому / сожаление
          <ul>
            <li>If clause -</li>
            <li>Main clause -</li>
            <li>Если я бы не пила вчера, у меня бы не болела голова</li>
          </ul>
        </li>
      </ol>

      <h2>Irregular verbs</h2>
      <table>
        <thead>
          <tr>
            <th>Base form</th>
            <th>Past tense</th>
            <th>Past participle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>be</td>
            <td>was/were</td>
            <td>been</td>
          </tr>
          <tr>
            <td>begin</td>
            <td>began</td>
            <td>begun</td>
          </tr>
          <tr>
            <td>break</td>
            <td>broke</td>
            <td>broken</td>
          </tr>
          <tr>
            <td>bring</td>
            <td>brought</td>
            <td>brought</td>
          </tr>
          <tr>
            <td>buy</td>
            <td>bought</td>
            <td>bought</td>
          </tr>
          <tr>
            <td>build</td>
            <td>built</td>
            <td>built</td>
          </tr>
          <tr>
            <td>choose</td>
            <td>chose</td>
            <td>chosen</td>
          </tr>
          <tr>
            <td>come</td>
            <td>came</td>
            <td>come</td>
          </tr>
          <tr>
            <td>cost</td>
            <td>cost</td>
            <td>cost</td>
          </tr>
          <tr>
            <td>cut</td>
            <td>cut</td>
            <td>cut</td>
          </tr>
          <tr>
            <td>do</td>
            <td>did</td>
            <td>done</td>
          </tr>
          <tr>
            <td>draw</td>
            <td>drew</td>
            <td>drawn</td>
          </tr>
          <tr>
            <td>drive</td>
            <td>drove</td>
            <td>driven</td>
          </tr>
          <tr>
            <td>eat</td>
            <td>ate</td>
            <td>eaten</td>
          </tr>
          <tr>
            <td>feel</td>
            <td>felt</td>
            <td>felt</td>
          </tr>
          <tr>
            <td>find</td>
            <td>found</td>
            <td>found</td>
          </tr>
          <tr>
            <td>get</td>
            <td>got</td>
            <td>got</td>
          </tr>
          <tr>
            <td>give</td>
            <td>gave</td>
            <td>given</td>
          </tr>
          <tr>
            <td>go</td>
            <td>went</td>
            <td>gone</td>
          </tr>
          <tr>
            <td>have</td>
            <td>had</td>
            <td>had</td>
          </tr>
          <tr>
            <td>hear</td>
            <td>heard</td>
            <td>heard</td>
          </tr>
          <tr>
            <td>hold</td>
            <td>held</td>
            <td>held</td>
          </tr>
          <tr>
            <td>keep</td>
            <td>kept</td>
            <td>kept</td>
          </tr>
          <tr>
            <td>know</td>
            <td>knew</td>
            <td>known</td>
          </tr>
          <tr>
            <td>leave</td>
            <td>left</td>
            <td>left</td>
          </tr>
          <tr>
            <td>lead</td>
            <td>led</td>
            <td>led</td>
          </tr>
          <tr>
            <td>let</td>
            <td>let</td>
            <td>let</td>
          </tr>
          <tr>
            <td>lie</td>
            <td>lay</td>
            <td>lain</td>
          </tr>
          <tr>
            <td>lose</td>
            <td>lost</td>
            <td>lost</td>
          </tr>
          <tr>
            <td>make</td>
            <td>made</td>
            <td>made</td>
          </tr>
          <tr>
            <td>mean</td>
            <td>meant</td>
            <td>meant</td>
          </tr>
          <tr>
            <td>meet</td>
            <td>met</td>
            <td>met</td>
          </tr>
          <tr>
            <td>pay</td>
            <td>paid</td>
            <td>paid</td>
          </tr>
          <tr>
            <td>put</td>
            <td>put</td>
            <td>put</td>
          </tr>
          <tr>
            <td>run</td>
            <td>ran</td>
            <td>run</td>
          </tr>
          <tr>
            <td>say</td>
            <td>said</td>
            <td>said</td>
          </tr>
          <tr>
            <td>see</td>
            <td>saw</td>
            <td>seen</td>
          </tr>
          <tr>
            <td>sell</td>
            <td>sold</td>
            <td>sold</td>
          </tr>
          <tr>
            <td>send</td>
            <td>sent</td>
            <td>sent</td>
          </tr>
          <tr>
            <td>set</td>
            <td>set</td>
            <td>set</td>
          </tr>
          <tr>
            <td>sit</td>
            <td>sat</td>
            <td>sat</td>
          </tr>
          <tr>
            <td>speak</td>
            <td>spoke</td>
            <td>spoken</td>
          </tr>
          <tr>
            <td>spend</td>
            <td>spent</td>
            <td>spent</td>
          </tr>
          <tr>
            <td>stand</td>
            <td>stood</td>
            <td>stood</td>
          </tr>
          <tr>
            <td>take</td>
            <td>took</td>
            <td>taken</td>
          </tr>
          <tr>
            <td>teach</td>
            <td>taught</td>
            <td>taught</td>
          </tr>
          <tr>
            <td>tell</td>
            <td>told</td>
            <td>told</td>
          </tr>
          <tr>
            <td>think</td>
            <td>thought</td>
            <td>thought</td>
          </tr>
          <tr>
            <td>understand</td>
            <td>understood</td>
            <td>understood</td>
          </tr>
          <tr>
            <td>wear</td>
            <td>wore</td>
            <td>worn</td>
          </tr>
          <tr>
            <td>win</td>
            <td>won</td>
            <td>won</td>
          </tr>
          <tr>
            <td>write</td>
            <td>wrote</td>
            <td>written</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default EnglishTensesPage;

export const Head = () => <title>English tenses</title>;
