import type { LanguageEnum } from '~/types/enums/languageEnum';

export const createCompanyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Company created!' : 'สร้างบริษัทแล้ว!';
export const createCompanyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your company has been successfully created on Upjob.'
    : 'บริษัทของคุณถูกสร้างบน Upjob สำเร็จแล้ว';

export const createResumeTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Resume created!' : 'สร้างเรซูเม่แล้ว!';
export const createResumeMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your resume has been successfully created on Upjob.'
    : 'สร้างเรซูเม่ของคุณบน Upjob สำเร็จแล้ว';

export const createVacancyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Vacancy created!' : 'สร้างตำแหน่งงานว่างแล้ว!';
export const createVacancyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your vacancy has been successfully created on Upjob.'
    : 'ตำแหน่งงานว่างของคุณถูกสร้างบน Upjob สำเร็จแล้ว';

export const publishResumeTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Resume has been published!' : 'มีการเผยแพร่เรซูเม่แล้ว!';
export const publishResumeMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your resume has been successfully published on Upjob.'
    : 'เรซูเม่ของคุณได้รับการเผยแพร่บน Upjob แล้ว';

export const publishVacancyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Vacancy has been published!' : 'ตำแหน่งงานว่างได้รับการเผยแพร่แล้ว!';
export const publishVacancyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your vacancy has been successfully published on Upjob.'
    : 'ตตำแหน่งงานว่างของคุณได้รับการเผยแพร่บน Upjob แล้ว';

export const publishCompanyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Company has been published!' : 'บริษัทได้รับการเผยแพร่แล้ว!';
export const publishCompanyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your company has been successfully published on Upjob.'
    : 'บริษัทของคุณได้รับการเผยแพร่บน Upjob แล้ว';

export const unpublishResumeTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Resume has been unpublished!.' : 'เรซูเม่ไม่ได้รับการเผยแพร่!';
export const unpublishResumeMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your resume has been successfully unpublished on Upjob.'
    : 'เรซูเม่ของคุณถูกยกเลิกการเผยแพร่บน Upjob แล้ว';

export const unpublishVacancyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Vacancy has been unpublished!' : 'ตำแหน่งงานว่างไม่ได้รับการเผยแพร่!';
export const unpublishVacancyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your vacancy has been successfully unpublished on Upjob.'
    : 'ตำแหน่งงานว่างของคุณได้รับการยกเลิกการเผยแพร่บน Upjob แล้ว';

export const unpublishCompanyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Company has been unpublished!' : 'บริษัทไม่ได้รับการเผยแพร่!';
export const unpublishCompanyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your company has been successfully unpublished on Upjob.'
    : 'บริษัทของคุณถูกยกเลิกการเผยแพร่บน Upjob แล้ว';

export const copiedResumeTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Resume copied!' : 'คัดลอกเรซูเม่แล้ว!';
export const copiedResumeMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your resume has been successfully duplicated on Upjob.'
    : 'เรซูเม่ของคุณได้รับการทำซ้ำบน Upjob เรียบร้อยแล้ว';

export const copiedVacancyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Vacancy copied!' : 'คัดลอกตำแหน่งงานว่างแล้ว!';
export const copiedVacancyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your vacancy has been successfully duplicated on Upjob.'
    : 'ตำแหน่งงานว่างของคุณได้รับการทำซ้ำบน Upjob เรียบร้อยแล้ว';

export const copiedCompanyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Company copied!' : 'คัดลอกบริษัทแล้ว!';
export const copiedCompanyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your company has been successfully duplicated on Upjob.'
    : 'บริษัทของคุณได้รับการทำซ้ำบน Upjob เรียบร้อยแล้ว';

export const deletedResumeTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Resume has been deleted!' : 'เรซูเม่ถูกลบแล้ว!';
export const deletedResumeMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your resume has been successfully deleted on Upjob.'
    : 'เรซูเม่ของคุณถูกลบบน Upjob แล้ว';

export const deletedVacancyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Vacancy has been deleted!' : 'ตำแหน่งงานว่างถูกลบแล้ว!';
export const deletedVacancyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your vacancy has been successfully deleted on Upjob.'
    : 'ตำแหน่งงานว่างของคุณถูกลบบน Upjob แล้ว';

export const deletedCompanyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Company has been deleted!' : 'บริษัทถูกลบแล้ว!';
export const deletedCompanyMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your company has been successfully deleted on Upjob.'
    : 'บริษัทของคุณถูกลบบน Upjob แล้ว';

export const changedPasswordTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Password changed!' : 'เปลี่ยนรหัสผ่านแล้ว!';
export const changedPasswordMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Now you can use your new password to log into your account and enjoy all the available features.'
    : 'ตอนนี้คุณสามารถใช้รหัสผ่านใหม่ของคุณเพื่อเข้าสู่บัญชีของคุณและเพลิดเพลินไปกับฟีเจอร์ทั้งหมด';

export const errorActionTitle = (lang: LanguageEnum) => (lang === 'en' ? 'Failed!' : 'ล้มเหลว!');
export const errorActionMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Something went wrong.'
    : 'มีข้อผิดพลาดบางอย่างเกิดขึ้นหรืออีเมลของคุณไม่ได้รับการยืนยัน';

export const errorPublishCommonIsNotEmailConfirmMessage = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Your account has not been verified by email.'
    : 'บัญชีของคุณยังไม่ได้รับการยืนยันทางอีเมล';

export const successAccessTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Successfully!' : 'สำเร็จแล้ว!';
export const successAccessMessage = (lang: LanguageEnum) =>
  lang === 'en' ? 'Your request has been sent.' : 'ส่งคำขอของคุณแล้ว';
export const errorPublishVacancyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Your vacancy cannot be published.' : 'ตำแหน่งงานว่างของคุณไม่สามารถเผยแพร่ได้';
export const errorPublishCompanyTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Your company cannot be published.' : 'บริษัทของคุณไม่สามารถเผยแพร่ได้';
export const errorPublishVacancyMessage = (lang: LanguageEnum) =>
  lang === 'en' ? 'Please complete the job vacancy form!' : 'กรุณากรอกแบบฟอร์มตำแหน่งงานว่าง!';
export const errorPublishResumeTitle = (lang: LanguageEnum) =>
  lang === 'en' ? 'Your resume cannot be published.' : 'ประวัติย่อของคุณไม่สามารถเผยแพร่ได้';
export const errorPublishResumeMessage = (lang: LanguageEnum) =>
  lang === 'en' ? 'Please complete the resume form!' : 'กรุณากรอกแบบฟอร์มเรซูเม่!';
export const errorPublishUnverifiedCompanyTitle = (lang: LanguageEnum) =>
  lang === 'en'
    ? 'Until the company has passed verification, we cannot publish it.'
    : 'เราไม่สามารถเผยแพร่ได้จนกว่าบริษัทจะผ่านการยืนยันตัวตน';
