import React from 'react';
import './WordsList';
import './WordsList.css';

function WordsList() { 

return (
  //если карточка добавлена, то рисуем таблицу
  <div class="training">
 <table>
   <tr>
    <th>СЛОВО</th>
    <th>ТРАНСКРИПЦИЯ</th>
    <th>ПЕРЕВОД</th>
    <th>ТЕГИ</th>
    <th className='common-buttons'></th>
    <th className='common-buttons'></th>
    </tr>
   <tr>
    <td><input type='text'></input></td>
    <td><input type='text'></input></td>
    <td><input type='text'></input></td>
    <td><input type='text'></input></td>
    <td><button className='save-button'>Сохранить</button></td>
    <td><button className='cancel-button'>Отмена</button></td>
    </tr>
    <tr>
    <td>поле</td>
    <td>поле</td>
    <td>поле</td>
    <td>поле</td>
    <td><button className='edit-button'></button></td>
    <td><button className='delete-button'></button></td>
    </tr>
    <tr>
    <td>поле</td>
    <td>поле</td>
    <td>поле</td>
    <td>поле</td>
    </tr>
    <tr>
    <td>поле</td>
    <td>поле</td>
    <td>поле</td>
    <td>поле</td>
    </tr>
   </table>
</div>
)
};

export default WordsList;