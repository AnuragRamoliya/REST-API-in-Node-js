//GLOBAL STATUS
exports.STATUS_CODES = {
    // 1XX INFORMATIONAL
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    EARLY_HINTS: 103,

    // 2XX SUCCESS
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,

    // 3XX REDIRECTION
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,

    // 4XX CLIENT ERROR
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    UN_PROCESSABLE_ENTITY: 422,
    VALIDATION_ERROR: 422,
    NOT_VALID_DATA: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    UNORDERED_COLLECTION: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,

    // 5XX SERVER ERROR
    SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    BANDWIDTH_LIMIT_EXCEEDED: 509,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
    BRIANTREE_REFUND_ISSUE: 512
};

//GLOBAL MESSAGES
exports.STATUS_MESSAGES = {
    SERVER_ERROR: "Internal server error! Please try again.",
    VERIFICATION_EMAIL_SENT: "We have sent you an verification email to your account",
    EMAIL_VERIFIED: "Your account has been verified successfully.",
    EMAIL_VERIFIED_ALREADY: "Your account is already verified.",
    REGISTER_SUCCESS: "You have successfully signed up.",
    LOGIN_SUCCESS: "You have successfully logged in.",
    IMAGE_SUCCESS: "Your image has been successfully saved.",
    RESET_PASSWORD_ALREADY: "You already have reset the password with this token.",
    
    EXISTS: {
        USER: "User already exist!",
        EMAIL: "Email is already registered!",
        EMAIL_GUEST: "It looks like you’ve ordered with us before! Click ‘Forgot Password’ to reset your password.",
        COUPON: "This coupon code already exist!",
        SLUG: "This slug already exist!",
		CONTACT: "Mobile number is already exist!",
		USERNAME: "Username is already exist!",
		TITLE: "This title already exist",
        FOLDER_GROUP_ALREADY_EXIST: "Zipcode folder group is already exist!",
        EMAIL_ALREADY_EXISTS: "This email is already registered withe another customer!",
    },
    NOT_FOUND: {
        USER: "Your email address is not available in our system!",
        ROLE: "Role is not available in our system!",
        NOTIFICATION_GROUP: "Notification group is not available in our system!",
        NOTIFICATION_GROUP_USER: "Notification group user is not available in our system!",
        EMAIL: "Your email address is not available in our system!",
        IMAGE: "Image not available.",
        ACCOUNT: "We can't find this account",
        CLOCK_IN: "You haven't clock in into system yet.",
        CLOCK_TIME_ENTRY_EXPORT: "You haven't clock in into system with selected duration.",
        CONFIGURATION: "Configuration is not available in our system!",
        PAYROLL_DATE: "Payroll date is not available in our system!",
        CHANGE_REQUEST: "Change request is not available in our system!",
        NOTIFICATION_LIST: "Notification is not available in our system!",
        USER_LOOKUP: "User is not available in our system!",
        STORE_SETTINGS: {
            FOLDER: "Store settings folder is not available in our system!",
            ZIP_CODE: "Store settings zip code is not available in our system!",

            ZIP_CODE_FOLDER: "Zip code associated with folder is not available in our system!",
            EMAIL_NOTIFICATION: "Email notification is not available in our system!",
            ROLLOVER_TIMES: "Rollover times is not available in our system!",
            NOT_DELIVERING: "Currently, we are not delivering to your location."
        },
        PETAL_REWARDS: {
            PETAL_REWARD_CONFIG: "Petal rewards config is not available in our system!",
            PETAL_REWARD_RECORD: "Petal rewards is not available for this customer in the system!",
            // PETAL_REWARD_CONFIG: "Configuration key is not available in our system to get the Petal Rewards configuration!"
        },
        HOLIDAY_CUTOFF: "Holiday cutoff is not available in our system!",
        PAGE: "Page is not available in our system!",
        FAQ: "Faq is not available in our system!",
        UP_CHARGE_DATES: "Upcharge date is not available in our system!",
        BLOCK_OUT_DATES: "Block out date is not available in our system!",
        GIFT_CARD: "Gift card is not available in our system!",
        CMS_BLOGS: "Blog is not available in our system!",
        CMS_BLOG_CATEGORY: "Blog category is not available in our system!",
        ORDER: {
            ORDER_RECORD: "Order is not available in our system!",
            GREETINGS_MESSAGE: "Greetings message is not available in our system!",
            ORDER_RECIPIENT: "Recipient data is not available in our system!",
            GREETINGS_DRIVER_INSTRUCTION_MESSAGE: "Greetings message and driver instruction is not available in our system!"
        },
        PRODUCT: {
            PRODUCT: "Product is not available in our system!",
            ZIP_CODE: "Zip Code is not available in our system!"
        },
        COUPON_CODE: "This coupon code does not exist!",
        CATEGORY: "category is not available in our system!",
    },
    PASSWORD: {
        MISMATCH: "Provided password do not match",
        TOO_SIMPLE: "Please create more complicated password",
        INCORRECT: "Password incorrect",
        NOT_SAME: "Password and confirm password are not same",
        CHANGED: "Password has been changed successfully",
        CURRENT_PASSWORD_MISMATCH: "Current password does not match."
    },
    PROCESS: {
        EMAIL_SENT: "We have sent email to your account",
        EMAIL_SENT_ACCOUNT: "We have sent email to %s"
    },
    CONTACT_US_PROCESS: {
        EMAIL_SENT: "Your email has been sent successfully"
    },
    TOKEN: {
        INVALID: "Your token is not valid.",
        EXPIRED: "Your token has been expired.",
        LOGOUT: "You have been successfully logged out."
    },
    IN_USE: {
        CATEGORY: "This category is being used by other modules !",
        PRODUCT: "This product is being used by other modules !",
        BLOG_CATEGORY: "This blog category is being used in blogs !",
        CATEGORY_HIERARCHY: "This category hierarchy is being used by other modules !",
    },
    USER: {
        PROFILE_UPDATED: "Your profile has been updated successfully.",
        PROFILE_IMAGE_UPDATED: "Your profile image has been updated successfully.",
        PROFILE_DELETED: "Your profile has been deleted successfully.",
        NOT_VERIFIED: "Your email address is not verified.",
        INACTIVE: "Your email address is not active.",
        INVALID: "Please enter valid email & password."
    },
    CUSTOMER: {
        CUSTOMER_UPDATED: "Your customer has been updated successfully."
    },
    ROLE: {
        ROLE_ADD: "Your role has been added successfully.",
        ROLE_UPDATE: "Your role has been updated successfully.",
        ROLE_DELETE: "Your role has been deleted successfully.",
        ROLE_GET: "Role has been loaded successfully"
    },
    REMINDER: {
        REMINDER_ADD: "Your reminder has been added successfully.",
        REMINDER_UPDATE: "Your reminder has been updated successfully.",
        REMINDER_DELETE: "Your reminder has been deleted successfully.",
        REMINDER_GET: "Role has been loaded successfully"
    },
    DAILY_REMINDER: {
      //  REMINDER_ADD: "Your reminder has been added successfully.",
        REMINDER_UPDATE: "Your reminder for today has been updated successfully.",
        REMINDER_DELETE: "Your reminder for today has been deleted successfully.",
        REMINDER_GET: "Role has been loaded successfully"
    },
    CHANGE_REQUEST: {
        CHANGE_REQUEST_ADD: "Your change request has been added successfully.",
        CHANGE_REQUEST_UPDATE: "Your change request has been updated successfully.",
        CHANGE_REQUEST_DELETE: "Your change request has been deleted successfully.",
        CHANGE_REQUEST_GET: "change request has been loaded successfully"
    },
    PAYROLL_DATE: {
        PAYROLL_DATE_ADD: "Your payroll date has been added successfully.",
        PAYROLL_DATE_UPDATE: "Your payroll date has been updated successfully.",
        PAYROLL_DATE_DELETE: "Your payroll date has been deleted successfully.",
        PAYROLL_DATE_GET: "Payroll date has been loaded successfully"
    },
    NOTIFICATION: {
        NOTIFICATION_GROUP_ADD: "Your notification group has been added successfully.",
        NOTIFICATION_GROUP_UPDATE: "Your notification group has been updated successfully.",
        NOTIFICATION_GROUP_DELETE: "Your notification group has been deleted successfully.",
        NOTIFICATION_GROUP_GET: "Notification group has been loaded successfully",
        NOTIFICATION_GROUP_USER_ADD: "Your notification group users has been added successfully.",
        NOTIFICATION_GROUP_USER_UPDATE: "Your notification group users has been updated successfully.",
        NOTIFICATION_GROUP_USER_DELETE: "Your notification group users has been deleted successfully.",
        NOTIFICATION_GROUP_USER_GET: "Notification group users has been loaded successfully",
        NOTIFICATION_GROUP_USER_GET_BY_GROUP: "Notification group users has been loaded successfully",
        SNOOZE: "Notification has been snoozed successfully"
    },
    NOTIFICATION_ALERT_MESSAGE: {
        LUNCH_BREAK_TITLE: "Lunch break",
        LUNCH_BREAK_MESSAGE: "Your Lunch Break Is Approaching. Please Take Your Lunch Break.",
        LUNCH_BREAK_CONTENT: "Your Lunch Break Is Approaching. Please Take Your Lunch Break.",
        DAY_END_TITLE: "Day end",
        DAY_END_MESSAGE: "You have been auto clocked out of the system successfully.",
        DAY_END_CONTENT: "You have been auto clocked out of the system successfully.",
        CLOCKIN_AGAIN_TITLE: "Day start",
        CLOCKIN_AGAIN_MESSAGE: "You need to clock-in again to continue your productive work.",
        CLOCKIN_AGAIN_CONTENT: "You need to clock-in again to continue your productive work."
    },
    CONFIGURATION: {
        CONFIGURATION_ADD: "Your configuration has been added successfully.",
        CONFIGURATION_UPDATE: "Your configuration has been updated successfully.",
        CONFIGURATION_DELETE: "Your configuration has been deleted successfully.",
        CONFIGURATION_GET: "Configuration has been loaded successfully",
        CONFIGURATION_GET: "Configuration has been loaded successfully"
    },
    EXCEPTION: {
        EXCEPTION_ADD: "Your exception has been added successfully.",
        EXCEPTION_UPDATE: "Your exception has been updated successfully.",
        EXCEPTION_DELETE: "Your exception has been deleted successfully.",
        EXCEPTION_GET: "Exception has been loaded successfully"
    },
    STORE_SETTINGS: {
        FOLDER_ADD: "Your folder has been added successfully.",
        FOLDER_UPDATE: "Your folder has been updated successfully.",
        FOLDER_DELETE: "Your folder has been deleted successfully.",
        FOLDER_GET: "Folder has been loaded successfully",
        FOLDER_ZIP_CODE_ADD: "Your zip code associated with the folder has been added successfully.",
        FOLDER_ZIP_CODE_DELETE: "Your zip code associated with the folder has been deleted successfully.",
        ZIP_CODE_ADD: "Your zip code has been added successfully.",
        ZIP_CODE_UPDATE: "Your zip code has been updated successfully.",
        ZIP_CODE_DELETE: "Your zip code has been deleted successfully.",
        ZIP_CODE_GET: "Zip code has been loaded successfully",
        ZIP_CODE_AVAILABLE: "Zip code is available",
        ZIP_CODE_NOT_AVAILABLE: "Zip code is not available",
        ZIP_CODE_ALREADY_ASSOCIATED: "Zip code has already associated with the folder.",
        EMAIL_NOTIFICATION_ADD: "Your Email notifications has been added successfully.",
        EMAIL_NOTIFICATION_UPDATE: "Your Email notifications has been updated successfully.",
        EMAIL_NOTIFICATION_DELETE: "Your Email notifications has been deleted successfully.",
        EMAIL_NOTIFICATION_GET: "Email Notifications has been loaded successfully",
        ROLLOVER_TIMES_ADD: "Your Rollover times has been added successfully.",
        ROLLOVER_TIMES_UPDATE: "Your Rollover times has been updated successfully.",
        ROLLOVER_TIMES_GET: "Rollover times has been loaded successfully"
    },
    PETAL_REWARDS: {
        PETAL_REWARD_CONFIG_ADD: "Your petal reward config has been added successfully.",
        PETAL_REWARD_CONFIG_UPDATE: "Your petal reward config has been updated successfully.",
        PETAL_REWARD_CONFIG_DELETE: "Your petal reward config has been deleted successfully.",
        PETAL_REWARD_CONFIG_GET: "Petal reward config has been loaded successfully",
        PETAL_REWARD_CUSTOMER_ADD: "Your customer's petal reward has been added successfully.",
        PETAL_REWARD_CUSTOMER_GET: "Customer's petal reward has been loaded successfully",
        PETAL_REWARD_CUSTOMER_ORDER_ADD: "Your customer's order petal reward has been added successfully.",
        PETAL_REWARD_CUSTOMER_ORDER_GET: "Customer's order petal reward has been loaded successfully",
        PETAL_REWARD_POINTS_ADD: "Your petal rewards points has been added successfully.",
        PETAL_REWARD_POINTS_UPDATE: "Your petal rewards points has been updated successfully.",
        PETAL_REWARD_POINTS_REDEEM: "Your petal rewards points has been redeemed successfully.",
        PETAL_REWARD_POINTS_VALUE: "Your petal rewards points has been loaded successfully.",
        PETAL_REWARD_GET: "Your petal rewards points has been loaded successfully.",
        PETAL_REWARD_ESTIMATED_POINTS_CALCULATED: "Your estimated points calculated successfully",
    },
    BLOCK_OUT_DATES: {
        BLOCK_OUT_DATES_ADD: "Your blockout date has been added successfully.",
        BLOCK_OUT_DATES_UPDATE: "Your blockout date has been updated successfully.",
        BLOCK_OUT_DATES_DELETE: "Your blockout date has been deleted successfully.",
        BLOCK_OUT_DATES_ZIP_CODE_ADD: "Blockout date zip code has been loaded successfully",
        BLOCK_OUT_DATES_ADDRESS_TYPE_ADD: "Blockout date address type has been loaded successfully",
        BLOCK_OUT_DATES_AVAILABILITY: "Currently, we are not delivering to your location because there is a Blockout on this selected delivery date and zipcode."
    },
    UP_CHARGE_DATES: {
        UP_CHARGE_DATES_ADD: "Your upcharge date config has been added successfully.",
        UP_CHARGE_DATES_UPDATE: "Your upcharge date config has been updated successfully.",
        UP_CHARGE_DATES_DELETE: "Your upcharge date config has been deleted successfully.",
        UP_CHARGE_DATES_GET: "Upcharge date config has been loaded successfully"
    },
    GIFT_CARD: {
        GIFT_CARD_ADD: "Your gift card has been added successfully.",
        GIFT_CARD_UPDATE: "Your gift card has been updated successfully.",
        GIFT_CARD_DELETE: "Your gift card has been deleted successfully.",
        GIFT_CARD_GET: "Gift card has been loaded successfully",
        GIFT_CARD_CODE_EXIST: "Gift card slug is already exist!"
    },
    COUPON_CODE: {
        VALIDATE: "Promocode validated.",
        NOT_VALID_COUPON_CODE: "This coupon code does not exist!",
        NOT_VALID_DISCOUNT_AMOUNT: "There is a mismatch in discount amount and coupon code amount.",
        UNKNOWN_COUPONCODE: "Unknown Promocode.",
        PARAMETER_MISSING: "Parameter missing.",
        NOT_APPLICABLE_ON_PRODUCT: "This coupon is not applicable on the selected products.",
        COUPON_EXPIRED: "Applied coupon has expired.",
        COUPON_MAX_USED_EXCEEDED: "Applied coupon has expired and not available",
        NOT_VALID_SUBTOTAL: "Your order total should be more then {AMOUNT} to avail this coupon code.",
    },
    CMS_BLOGS: {
        CMS_BLOGS_ADD: "Your blogs has been added successfully.",
        CMS_BLOGS_ADD_CATEGORY: "Your blogs category has been added successfully.",
        CMS_BLOGS_UPDATE: "Your blogs has been updated successfully.",
        CMS_BLOGS_UPDATE_CATEGORY: "Your blogs category has been updated successfully.",
        CMS_BLOGS_DELETE: "Your blogs has been deleted successfully.",
        CMS_BLOGS_DELETE_CATEGORY: "Your blogs category has been deleted successfully.",
        CMS_BLOGS_GET: "Blogs has been loaded successfully",
        CMS_BLOGS_TITLE_EXIST: "Blogs title is already exist!",
        CMS_BLOGS_CATEGORY_ADD: "Your blog category has been added successfully.",
        CMS_BLOGS_CATEGORY_UPDATE: "Your blog category has been updated successfully.",
        CMS_BLOGS_CATEGORY_DELETE: "Your blog category has been deleted successfully.",
        CMS_BLOGS_CATEGORY_GET: "Blog category has been loaded successfully",
        CMS_BLOGS_CATEGORY_TITLE_EXIST: "Blog category title is already exist!"
    },
    REQUEST: {
        LIST: "Request has been loaded successfully.",
        DELETED: "Request has been deleted successfully.",
        NOT_FOUND: "Provided request doesn't exist."
    },
    PAGE: {
        PAGE_ADD: "Your page has been added successfully.",
        PAGE_UPDATE: "Your page has been updated successfully.",
        PAGE_DELETE: "Your page has been deleted successfully.",
        PAGE_GET: "Page has been loaded successfully"
    },
    FAQ: {
        FAQ_ADD: "Your faq has been added successfully.",
        FAQ_UPDATE: "Your faq has been updated successfully.",
        FAQ_DELETE: "Your faq has been deleted successfully.",
        FAQ_GET: "FAQ has been loaded successfully"
    },
    DELIVERY_MATRIX: {
        VALIDATE_SUCCESS: "Delivery charge is match with given delivery charge.",
        VALIDATE_FAILED: "Delivery charge is not match with given delivery charge."
    },
    COUNTRIES: "Countries has been loaded successfully.",
    BRANDS: "Brands has been loaded successfully.",
    MODELS: "Models has been loaded successfully.",
    LANGUAGE: "Languages has been loaded successfully.",
    LANGUAGE_MESSAGES: "Language messages has been loaded successfully.",
    VALIDATION: {
        REQUIRED: {
            CONFIRM_PASSWORD: "Please enter confirm password.",
            CURRENT_PASSWORD: "Please enter current password.",
            FIRST_NAME: "Please enter first name.",
            LAST_NAME: "Please enter last name.",
            TITLE: "Please enter title.",
            CONFIG_KEY: "Please enter configuration key.",
            CONFIG_VALUE: "Please enter configuration value.",
            CONFIG_SMTP: "Please enter port and server detail only for the emailSmtpDetail configuration.",
            RESET_TOKEN: "Please enter reset token.",
            USER_ID: "Please enter user id",
            USERNAME: "Please enter username.",
            TYPE: "Please enter clock type",
            START_DATE: "Please enter week start date",
            END_DATE: "Please enter week end date",
            ITEMS_PER_PAGE: "Per page is required",
            CURRENT_PAGE: "Current page is required",
            CUSTOMER_ID: "Missing customer id",
            KEYWORD: "Missing search keyword",
            ORDER_TRANSACTION_ID: "Missing transaction id",
            MOBILE_NUMBER: "Please enter valid mobile number",
            USER_ID: "Please enter user ID",
            ADDRESS: "Please enter address",
            ZIP_CODE: "Please enter zip code",
            STATE_ID: "Please enter state ID",
            COUNTRY_ID: "Please enter country ID",
            TABLE: "Please enter table name",
            STATUS: "Please enter valid status",
            ID: "Please enter id",
            LOCAL_PHONE1: "Please enter local phone1",
            EMAIL: "Please enter email",
            CITY: "Please enter city",
            COUNTRY: "Please enter country",
            STATE: "Please enter state",
            BUSINESS_HOURS:"Please enter business hours",
            ROLE: {
                ID: "Please enter role",
                TITLE: "Please enter role name",
                STATUS: "Please enter role status",
                DEFAULT_ROLE: "You can not delete default Role"
            },
            NOTIFICATION: {
                NOTIFICATION_GROUP_ID: "Please enter notification group",
                NOTIFICATION_GROUP_TITLE: "Please enter notification group name",
                NOTIFICATION_GROUP_STATUS: "Please enter notification group status",
                NOTIFICATION_GROUP_GROUP_ID: "Please enter notification group id",
                NOTIFICATION_GROUP_USER_ID: "Please enter notification user id",
                NOTIFICATION_GROUP_USER_GROUP_ID: "Please enter group id",
                NOTIFICATION_GROUP_USER_USER_ID: "Please enter user id"
            },
            CONFIGURATION: {
                ID: "Please enter configuration",
                KEY: "Please enter configuration name",
                VALUE: "Please enter configuration status",
                PRIVATE: "Please enter configuration private"
            },
            PAYROLL_DATE: {
                ID: "Please enter payroll date",
                FROM_DATE: "Please enter payroll date from date",
                TO_DATE: "Please enter payroll date to date",
                STATUS: "Please enter payroll date status"
            },
            CHANGE_REQUEST: {
                ID: "Please enter change request ID",
                STATUS: "Please enter change request status",
                REASON: "Please enter change request reason",
                TIME: "Please enter change request time",
                COMMENT: "Please enter change request comment",
                CLOCK_TIME_ID: "Please enter change request clock time ID",
                USER_ID: "Please enter change request user ID"
            },
            EXCEPTION: {
                ID: "Please enter exception",
                TITLE: "Please enter exception name",
                STATUS: "Please enter exception status",
                DURATION: "Please enter duration",
                DATE: "Please enter date of exception work",
                EXCEPTION_ID: "Please select exception type",
                USER_ID: "Please enter user id"
            },
            CATEGORIES: {
                TITLE: "Please enter category name"
            },
            PRODUCT: {
                PRODUCT_ID: "Please enter product id",
                SEQUENCE_NUMBER: "Please enter sequence number",
                RATING: "Please enter rating",
                REVIEW_ID: "Please enter review id",
                SLUG_INFO_IN_FILTER: "Please pass urlSlugData received in first page response."
            },
            MENU: {
                MENU_ID: "Please enter menu id"
            },
            STORE_SETTINGS: {
                FOLDER: {
                    GROUP_NAME: "Please enter group name",
                    ID: "Please enter folder ID",
                    STATUS: "Please enter folder status"
                },
                ZIP_CODE: {
                    ID: "Please enter zip code ID",
                    ZIP_CODE: "Please enter zip code",
                    IS_DElIVERABLE: "Please select deliverable option",
                    STATUS: "Please enter folder status",
                    FOLDER_ID: "Please enter folder ID"
                },
                FOLDER_ZIP_CODE: {
                    FOLDER_ID: "Please enter group/folder id",
                    ZIP_CODE_ID: "Please enter zip code id"
                },
                EMAIL_NOTIFICATION: {
                    EMAIL_ID: "Please enter email id",
                    TEMPLATE_NAME: "Please enter template name",
                    USERNAME: "Please enter username",
                    PASSWORD: "Please enter password"
                },
                ROLLOVER_TIME: {
                    ID: "Please enter rollover time id",
                    KEY: "Please enter key name",
                    VALUE: "Please enter value"
                },
                UP_CHARGE_DATES: {
                    ID: "Please enter upcharge id",
                    TITLE: "Please enter title",
                    AMOUNT: "Please enter amount",
                    APPLIES_ON: "Please enter applies On date",
                    APPLIES_UNTIL: "Please enter applies until date",
                    DATE: "Please enter date",
                    LOCAL: "Please enter local",
                    NON_LOCAL: "Please enter non local"
                }
            },
            PETAL_REWARDS: {
                ID: "Please enter petal rewards config id",
                POINTS: "Please enter points",
                AMOUNT: "Please enter amount",
                CUSTOMER_ID: "Please enter customer id",
                TOTAL_POINTS: "Please enter total points",
                TOTAL_AMOUNTS: "Please enter total amounts",
                IS_ENABLE_REWARDS: "Please select is enabled rewards",
                IS_POINTS_NOTIFICATION: "Please select points notifications",
                ORDER_ID: "Please enter order id",
                PETAL_REWARDS_ID: "Please enter petal rewards id",
                PRODUCT_PRICE: "Please enter product price"
            },
            BLOCK_OUT_DATES: {
                ID: "Please enter blockout dates id",
                TITTLE: "Please enter title",
                START_BLOCK_IN_ON: "Please enter start blocking on date",
                STOP_REPEATING_ON: "Please enter stop repeating on date",
                START_BLOCKING_AT: "Please enter start blocking at time",
                SERVICE_BLOCK_LOCAL_DELIVERY: "Please set value for the local delivery",
                SERVICE_BLOCK_NON_LOCAL_DELIVERY: "Please set value for the non-local delivery",
                SERVICE_BLOCK_WILL_CALL: "Please set value for the will call.",
                BLOCK_OUT_DATE_ZIP_CODE_ID: "Please select at least one zip code.",
                BLOCK_OUT_DATE_DELIVERY_ADDRESS_TYPE: "Please select at least one delivery address type.",
                BLOCK_OUT_DATE_ID: "Please enter blockout dates id.",
                BLOCK_OUT_DATE: "Please enter delivery date time to check the blockout availability.",
                BLOCK_OUT_ZIP_CODE_ID: "Please enter delivery zip code id to check the blockout availability.",
                BLOCK_OUT_ADDRESS_TYPE_ID: "Please enter delivery address type id to check the blockout availability.",
            },
            GIFT_CARD: {
                ID: "Please enter gift card id",
                NAME: "Please enter name",
                DESCRIPTION: "Please enter description",
                SLUG: "Please enter slug",
                AMOUNT: "Please enter amount"
            },
            CREDIT_CARD: {
                CUSTOMER_ID: "Please enter customer id",
                CARD_EXIST: "Payment method is already exist",
                PAYPAL_EXIST: "Paypal account is already exist",
            },
            CMS_BLOGS: {
                ID: "Please enter blog id",
                TITLE: "Please enter title",
                DESCRIPTION: "Please enter description",
                CREDIT: "Please enter credit",
                CAPTION: "Please enter caption",
                SLUG: "Please enter slug"
            },
            CONTACT_US: {
                ENQUIRY_TYPE: "Please select enquiry type",
                FIRST_NAME: "Please enter first name",
                LAST_NAME: "Please enter last name",
                EMAIL: "Please enter email",
                PHONE: "Please enter phone",
                MESSAGE: "Please enter message"
            },
            OCCASIONS: {
                OCCASION_ID: "Please enter occasion id",
                OCCASION: "Please enter occasion",
                GREETINGS_MESSAGE: "Please enter greetings message"
            },
            HOME_PAGE: {
                SCROLLABLE_TEXT: "Please enter scrollable_text value"
            },
            CERTIFICATION: {
                IMAGE: "Please add image",
                ID: "Please enter id"
            },
            RECIPE: {
                RAW_MATERIAL_TITLE: "Please enter raw material title",
                RECIPE_TYPE_ID: "Please select recipe type",
                INVENTORY: "Please enter inventory value",
                DUPLICATE_RECIPE_FOR_VARIATION: "Recipe already exist for selected variation",
                DUPLICATE_RAW_MATERIAL: "Raw material is already exist",
                RECIPE_TYPE_IS_ASSIGNED: "Recipe type is already assigned in raw materials or/and product recipe",
                RECIPE_UNIT_IS_ASSIGNED: "Recipe unit is assigned in product recipe",
                RECIPE_MATERIAL_IS_ASSIGNED: "Recipe material is assigned in product recipe",
            },
            HOLIDAY_CUTOFF: {
                PRODUCT_LABEL: "Please enter product label.",
                HEADLINE: "Please enter headline.",
                URL: "Please enter url.",
                COPY: "Please enter copy.",
                START_DATE: "Please enter start date.",
                END_DATE: "Please enter end date.",
                ID: "Please enter cut off id"
            },
            REVIEW_PRODUCT: {
                PRODUCT_ID: "Please enter product id",
                PRODUCT_TITLE: "Please enter product name",
                PRODUCT_URL: "Please enter product url",
                USERNAME: "Please enter username",
                EMAIL: "Please enter user email",
                REVIEW_CONTENT: "Please enter review content",
                REVIEW_TITLE: "Please enter review title",
                REVIEW_SCORE: "Please enter review score"
            },
            REPORT: {
                PRODUCT_ID: "Please enter product id",
                SHOPCODE: "Please enter shopcode",
                CSR_ID: "Please enter csr id",
            },
            REMINDER: {
                TITLE: "Please enter title",
                START_DATE: "Please select start date",
                END_DATE: "Please select end date",
                REMINDER_TYPE: "Please select reminder type",
                TIME: "Please select time",
                REPEAT_TYPE : "Please select repeat type",
                CREATED_BY : "Please enter created by user id"
            },
        },
        VALID: {
            USERNAME: "Please enter valid username.",
            EMAIL: "Please enter valid email address.",
            PASSWORD: "Please enter valid password.",
            ROLE_ID: "Please enter role ID.",
            STATUS: "Please enter valid status.",
            TOKEN: "Please enter valid token.",
            IDENTITY_TOKEN: "Please enter valid identity token.",
            CLOCK_TIME_IN: "Please enter valid clock in times.",
            CLOCK_TIME_OUT: "Please enter valid clock out times.",
            CLOCK_IN: "Please clock in first before clock out.",
            CLOCK_OUT: "Please clock out first before clock in.",
            EXCEPTION_HOURS: "You are not allowed to add an exception until greater than 6 min of working time.",
            EXCEPTION_HOURS_EXCEEDED_TOTAL_DURATION: "Your total productive working hours are less than your exception hour.",
            EXCEPTION_HOURS_CHANGE_REQUEST: "Please enter new time greater as you have worked more exception hour.",
            PAYROLL_FUTURE_DATE: "Payroll dates can be from the future.",
            CLOCK_TIME_ENTRY_NOT_AVAILABLE: "You haven't Clocked IN yet.",
            CLOCK_IN_NOT_AVAILABLE: "You haven't Clocked in yet for change request.",
            CLOCK_OUT_NOT_AVAILABLE: "You haven't Clocked out yet for change request.",
            PAYROLL_ALREADY_DONE: "Payroll is already done for this date.",
            PAYROLL_DATE_RANGE_CONFLICT: "Payroll is already added between this days.",
            CLOCK_OUT_LOWER_THEN_CLOCK_IN: "Please add new clock out time greater then current clock in.",
            CLOCK_OUT_LOWER_THEN_NEXT_CLOCK_IN: "Please add new clock out time less then next clock in.",
            CLOCK_OUT_LOWER_THEN_CURRENT_TIME: "Please add new clock out time less then current time.",
            CLOCK_IN_LOWER_THEN_CURRENT_TIME: "Please add new clock in time less then current time.",
            CLOCK_IN_LOWER_THEN_CLOCK_IN: "Please add new clock in time less then current clock out.",
            CLOCK_IN_LOWER_THEN_NEXT_CLOCK_IN: "Please add new clock in time greater then previous clock out.",
            COUPON_TYPE: "Type must be category / product",
            MODULE: "Please enter valid module",
            PETAL_REWARD_REDEEM_POINTS: "Please select redemption points less than available.",
            PETAL_REWARD_REDEEM_POINTS_INTERNAL_FUNCTION: "Please select redemption points less than available and points should be match with predefined redemption config points.",
            PETAL_REWARD_REDEEM_POINTS_EXCEEDS_AVAILABLE: "Please select bonus points to be redeemed within your available bonus points.",
            PETAL_REWARD_REDEEM_POINTS_NOT_MATCHED_WITH_CONFIG: "Applied points and amount should be match with predefined redemption config points and amount.",
            PETAL_REWARD_REDEEM_VALIDATION: "Applied bonus points and amount validated with the available bonus points and respective configured redeemable amount.",
            UP_CHARGE_DATES: "Please enter applies until date greater then applies on date and both should be future date",
            UP_CHARGE_DATES_ALREADY_DONE: "Upcharge date is already applied for this date",
            UP_CHARGE_DATES_DATE_RANGE_CONFLICT: "Upcharge date is already added between this days",
            BLOCK_OUT_DATES: "Please enter stop repeating on date greater then start blocking on date and both should be future date",
            BLOCK_OUT_DATES_TIME_AT: "Please enter start blocking at time between start and stop blocking date",
            BLOCK_OUT_DATES_ALREADY_DONE: "Block out date is already applied for this date",
            BLOCK_OUT_DATES_DATE_RANGE_CONFLICT: "Block out date is already added between this days",
            IMAGE_FILE_TYPE: "Only support jpeg,jpg,png,gif image types",
            HOLIDAY_CUTOFF_DATE_RANGE_CONFLICT: "Holiday cutoff date is already added between this days",
        },
        LENGTH: {
            USERNAME_MIN: "Username must be minimum of 4 character long.",
            USERNAME_MAX: "Username must be maximum of 16 character long.",
            PASSWORD: "Password must be minimum of 8 character long."
        },
        EXISTS: {
            ROLE: "There is already one role with Same name",
            DELIVERY_MATRIX: "There is already similar delivery matrix",
        },
        ARRAY: {
            ZIPCODE_FOLDER: "There must be atleast one Zipcode folder",
            ADDRESS_TYPES: "There must be atleast one Address type",
        },
        ONE_OF: {
            DELIVERY_DAY_OR_DATE: "There must be atleast one Day or start date and end date"
        }
    },
    ORDER: {
        REQUIRED: {
            ORDER_TRANSACTION: "Order transaction data required",
            ORDER_BILLING: "Order billing data required",
            ORDERS: "Order data required",
            ORDER_PAYMENT_METHOD: "Order payment method required",
            ORDER_PAYMENT_METHOD_NOT_EXIST: "Payment method does not exist",
            ORDER_RECIPIENT: "Missing recipient data for order",
            ORDER_ID: "Please enter order id",
            ORDER_NOTE_DESCRIPTION: "Please enter order note description",
            ORDER_NOTE_CREATED_BY: "Please enter created by",
            RECIPIENT_ID: "Please enter recipient id",
            ORDER_STATUS: "Please enter order status",
            EMAIL_ID: "Please enter email id",
        },
        SUCCESS: {
            ORDER_CREATED: "Your order placed successfully",
            ORDER_UPDATED: "Order updated successfully"
        },
        NOT_FOUND: {
            GIFT_CARD: "Gift card is not available in our system!",
            CUSTOMER_NOT_FOUND: "Customer account is not available in our system!",
            CUSTOMER_HOUSE_ACCOUNT_NOT_FOUND: "This Customer does not have a house account in our system for payment.",
            COUPON: "Coupon is not available in our system!"
        },
        ERROR:{
            NOT_REFUND_MORE_AMOUNT:"You can not refund more amount than the order initial payment amount",
            NOT_DO_ADD_REFUND_TOGETHER:"You can not do add fund and refund both together",
            ERROR_IN_PAYMENT:"Failed to add fund with payment transaction",
            ERROR_IN_UPDATE:"Failed to update order",
            TRANSACTION_DONE_WITH_CASH:"Order payment done with cash so you can not add fund or refund in this order",
            TRANSACTION_METHOD_NOT_ATTACHED:"Payment method not found so you can not add fund in this order",
            TRANSACTION_METHOD_NOT_ATTACHED_OR_DELETED:"Payment method not found or deleted so you can not add fund in this order",
            ORDER_CANCEL:"Your order is already cancelled",
            UP_CHARGE_CALCULATION:"Problem with upcharge calculation",
            TAX_CALCULATION:"Problem with tax calculation",
            ORDER_ALREADY_DESIGN_COMPLETED: "The Order is already completed",
            ORDER_UNASSIGNED_FROM_ACCOUNT: "The Order is unassigned from your account. Please go back to order page.",
            ORDER_ALREADY_RELEASE: "The Order is already released",
            ORDER_ALREADY_ASSIGNED: "This order has been already assigned, please select another order",
            ORDER_NOT_EDITABLE: "In this stage, you can not edit this order",
            PETAL_REWARD_CALCULATION: "Problem with petal reward point calculation",
            ONLY_LOCAL_ORDER_AVAILABLE: "Only local order accepted for selected zipcode",
            ONLY_NON_LOCAL_ORDER_AVAILABLE: "Only non local order are accepted for selected zipcode",
            ORDER_ALREADY_FRAUD: "The Order is already frauded",
            ORDER_ALREADY_UNFRAUD: "The Order is already unfrauded",
            ORDER_ALREADY_DELETE: "The Order is already deleted",
            ORDER_ALREADY_DELIVERED: "The Order is already delivered",
            ONFLEET_ALLOWED_ORDER_STATUS: "You are allowed to pass order status only delivered",
            MAX_ALLOWED_ORDER_ASSIGN: "You are not allowed to assign more than {MAXALLOW} order",
            REFUND_ISSUE_CANCEL_ORDER:"It seems your transaction is not settled. Click OK to refund full transaction OR click CANCEL to process refund after an hour for partial amount or cancel without refund",
            REFUND_ISSUE_UPDATE_ORDER:"This payment transaction is still not settled, please check again in an hour to update the order and process refund.",
            REFUND_AMOUNT_LESSTHAN_REMAINING:"Refund amount should be less than ${REMAINING_AMOUNT}",
            HOLIDAY_CUTOFF_PRODUCT_NOT_AVAILABLE:"Currently product {productname} is not available for order",
            COUPON_LIMIT_EXCEEDED: "You can not use coupon code more then once",
            MISSING_PARENT_ORDER_ID: "Missing parent order id",
            NOT_DO_ADD_FUND_IN_REPLACE_ORDER: "You can not add fund in replacement order",
            NOT_DO_REFUND_IN_REPLACE_ORDER: "You can not refund in replacement order",
            PAYMENT_GATEWAY_ERROR: "Please validate your payment information. The payment details are invalid",
            DOVE_PAYMENT_GATEWAY_ERROR: "Dove payment method only applicable for Receiving from a partner shop via Phone and Receiving from a partner shop via Dove",
            AVS_PAYMENT_GATEWAY_ERROR: "Billing ZIP code entered does not match card",
            ALREADY_OPEN_BY_OTHER_CSR: "This Order is already open by other CSR, Do you want to still proceed?",
            ALREADY_OPEN_BY_OTHER_CSR_NO_EDIT: "This Order is already open by other CSR, You can not edit this Order",
            ALREADY_EDIT_BY_OTHER_CSR: "This Order is already edited by other CSR, Do you want to edit it again?",
            CAN_NOT_VOID_ORDER: "This transaction has multiple orders of recipients. Thus, we cannot void it. Please recheck after sometime",
            ORDER_ONFLEET_ERROR: "Seems to issue with the driver app Onfleet so this order is not marked as completed.",
            ORDER_STORE_ID_NOT_MATCHED: "This order store is not match with the desinger store"
        }
    },
    STOCK_ORDER: {
        REQUIRED: {
            PRODUCT_ID: "Please enter product id",
            PRODUCT_NAME: "Please enter product name",
            PRODUCT_TYPE: "Please enter product type",
            VARIATION_ID: "Please enter variation id",
            VARIATION_NAME: "Please enter variation name",
            VARIATION_IMAGE: "Please enter variation image",
            DELIVERY_DATE: "Please enter delivery date",
            QTY: "Please enter qty",
            UNIT_PRICE: "Please enter unit price",
            TOTAL_PRICE: "Please enter total price",
        },
        SUCCESS: {
            ORDER_CREATED: "Stock order placed successfully",
            ORDER_UPDATED: "Stock order updated successfully"
        },
    },
	PRODUCT: {
		PRODUCT_LOCALLY_AVAILABLE: "Product is locally available as per added zip code.",
		PRODUCT_LOCALLY_NOT_AVAILABLE: "Product is not locally available as per added zip code.",
		PRODUCT_LOCALLY_NOT_AVAILABLE_PROD_ID: "Product is not locally available as per given product id.",
		PRODUCT_LOCALLY_AVAILABLE_PROD_ID: "Product is locally available as per given product id.",
		ARRANGEMENT_AND_PRODUCT_AVAILABILITY: "Arrangement and addons are available locally.",
		ARRANGEMENT_AND_PRODUCT_AVAILABILITY_NOT_LOCALLY: "Arrangement and addons are available with non-locally.",
		ARRANGEMENT_AND_PRODUCT_AVAILABILITY_ZIPDEL_NOT_AVAILAABLE: "Zipcode and delivery date are not available.",
		ARRANGEMENT_AND_PRODUCT_AVAILABILITY_ZIPCODE_NOT_AVAILAABLE: "Zipcode is not available.",
		ARRANGEMENT_AND_PRODUCT_AVAILABILITY_DELIVERY_DATE_NOT_AVAILAABLE: "Delivery date is not available.",
		ARRANGEMENT_AND_PRODUCT_AVAILABILITY_MISMATCHED: "All products are variations in local_only flag.",
		ARRANGEMENT_AND_PRODUCT_AVAILABILITY_CONFLICTS_WITH_ZIPCODE: "One of your order product is not availabe for zipcode you entered.",
		ARRANGEMENT_AND_PRODUCT_AVAILABILITY_NEED_FUTURE_DATE: "Please select a Delivery date of future and not past."
	},
    MOST_KEYWORD_SEARCH : {
        MOST_KEYWORD_SEARCH_ADD : "Keyword created successfully",
        MOST_KEYWORD_SEARCH_UPDATE : "Keyword updated successfully"
    },
    
    WEDDING: {
        INQUIRY_VALIDATION: {
            NAME: "Name is required field",
            DATE:"Date is required field.",
            EMAIL:"Email address is required field",
            PHONE:"Phone number is required field",
            VENUE:"Venue is required field",
            EVENT_TIME:"Event time is required field",
            GUEST_COUNT:"Guest count is required field",
            VALID_MAIL:"Please enter valid email address",
            EVENT_TYPE:"Event type is required field",
            BUDGET:"Preferred budget is required field",
        },
        INQUIRY_SUBMISSION_SUCCESS:"Inquiry form submitted successfully",
        INQUIRY_SUBMISSION_FAILED:"Something went wrong while submitting your query"
    }
};

// File Path
exports.PATHS = {
    IMAGES: {
        ORIGINAL: "/Original",
        THUMB: "/Thumb",
        TEMP: "/Temp",
        USERS: "/Users",
        CATEGORIES: "/Categories",
        CATEGORY_BANNER: "/Categories/banner",
        PRODUCTS: "/Products",
        PRODUCT_BANNER: "/Products/banner",
        HOME_PAGE_BANNER: "/home-page/banner",
        LOCATIONS_BANNER: "/locations/banner",
        BLOGS_BANNER: "/blogs/banner",
        CERTIFICATIONS: "/certifications",
        WORKED_WITH: "/worked-with",
        OTHER: "/other"
    },
    UPLOADS: {
        PRINT_MESSAGE: "/Uploads/PrintMessage"
    }
};