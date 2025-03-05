import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  // Set timeout untuk seluruh test
  test.setTimeout(60000); // Set timeout menjadi 60 detik

  // Login
  await page.goto('https://devidxrecord.idx.id/admin'); 
  
  // Isi username dan password
  await page.getByRole('textbox', { name: 'Username' }).fill('maker-hij-tes');
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  // await page.waitForTimeout(6000);

  // Klik tombol login dan tunggu navigasi
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'load' }),
    page.getByRole('textbox').nth(3).click(),
  ]);


// Mulai Looping
for (let i = 0; i < 100; i++) {


  // Navigasi ke halaman Margin
  await page.goto('https://devidxrecord.idx.id/admin/transaction-margin');
  

  
  // Klik tombol "Add New"
  await page.locator('.btn-add-new').click();

  // Klik tombol "Add" dan isi data margin manual
  await page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[3]/div/div/form[1]/div[2]/div[2]/div/div/div/button').click();

  // Locator Form
  const Noorder = page.locator('xpath=/html/body/div[2]/div[2]/div[2]/div/div[3]/div/div/form[1]/div[2]/div[2]/div/div/div/table/tbody/tr/td[4]/input');
  const Notransaction = page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[5]/input[1]');
  const waktu =  page.locator('xpath=//*[@id="tb-body-progress"]/tr/td[6]/input');
  const BS = page.locator('[name="ntransaction_type[]"]');
  const secode = page.locator('[name="nsecurity_code[]"]');
  const volume = page.locator('[name="nvolume[]"]');
  const price = page.locator('[name="nprice[]"]');
  const percentage = page.locator('[name="npercentage[]"]');
  const ABLawan = page.locator('[name="nopposite_company_id[]"]');
  const Reason = page.locator('[name="nreason_text[]"]');


  
  // Isi Form
  await Notransaction.fill(String(Math.floor(Math.random() * 10000)));
  await Noorder.fill(String(Math.floor(Math.random() * 10000)));
  await waktu.fill("18:00");
  await BS.selectOption('B');
  await secode.fill('PLAY');
  await volume.fill('200');
  await price.fill('300');
  await percentage.fill('4');
  await ABLawan.selectOption('AZ');
  await Reason.fill('PLAYWRIGHT');

  // Save
  await page.locator('button[type="submit"]').click();



  await page.waitForTimeout(2000);

// Hapus looping 
}

});