/**
   * Show Detail Data Vaccine Reminder
   * @param reminderId
   * @param currentUser
   * @returns GetAllVaccineReminderAppsViewModel
   */
  async showDetailReminder(
    reminderId: string,
    currentUser: any,
  ): Promise<DetailVaccineReminderAppsViewModel> {
    const userReminder = await Reminder.findOne({
      order: [
        ['createdAt', 'DESC'],
        ['patients', 'createdAt', 'ASC'],
        ['patients', 'vaccines', 'createdAt', 'ASC'],
      ],
      where: {
        reminderId,
        userId: currentUser.user.userLoginId,
      },
      include: this.AllVaccineReminderAppsIncludes(),
    });

    /** handle Insert Table Order Fees. */
    const totPaymentAmount = await this.getNewOrderFees(
      // orderPaymentCode,
      userReminder,
    );

    let totalPrice: number = 0;
    let totalDiscount: number = 0;

    const vaccineIds = userReminder.patients.map(dataVaccine => dataVaccine.vaccines).flatMap(v => v.map(id => id.vaccineId));

    const vaccines = await Vaccine.findAll({
      where: { vaccineId: vaccineIds}
    });

    for(let patient of userReminder.patients) {
      let dataVaccines = patient.vaccines;
      for (let dataVaccine of dataVaccines) {
        let vaccine = vaccines.find(v => v.vaccineId === dataVaccine.vaccineId);
        if(vaccine === null) {
          throw new BadRequestException(ERRMSG_DATA_NOT_EXIST('VACCINE'));
        }
        dataVaccine.price = vaccine.price;
        dataVaccine.originPrice = vaccine.originPrice;
        dataVaccine.vaccineName = vaccine.name;
        dataVaccine.typeName = vaccine.typeName;
        dataVaccine.discountPrice = vaccine.discountPrice;
        dataVaccine.priceAfterDiscount = vaccine.priceAfterDiscount;
        /**
         * handle jika vaksin mempunyai diskon atau tidak.
         * menambahkan total harga vaksin.
         * menambahkan total diskon vaksin jika vaksin mempunyai diskon.
         * */
        totalDiscount += vaccine.discountPrice;
        totalPrice += vaccine.priceAfterDiscount;
      }
    }

    userReminder.totalPrice = Number(totalPrice);
    userReminder.reminderPaymentAmount = Number(totalPrice) + Number(totPaymentAmount);
    // userReminder.reminderPaymentCode = Number(orderPaymentCode);

    // await userReminder.save();

    return generateViewModel(
      DetailVaccineReminderAppsViewModel,
      circularToJSON(userReminder),
    );
  }